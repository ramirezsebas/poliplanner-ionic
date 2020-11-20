import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FpunaService } from 'src/app/fpuna.service';
import { DataService } from '../../../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-por-carrera',
  templateUrl: './por-carrera.component.html',
  styleUrls: ['./por-carrera.component.scss'],
})
export class PorCarreraComponent implements OnInit {

  @Input() selectedCareerId;
  @Output() seleccionados = new EventEmitter();
  semestersClasses: any[];
  
  constructor(private fpuna: FpunaService, private data: DataService) {
    if (this.data.esAprobar){
      console.log('esto aprov');
      
      this.getData();
    }
    else
      this.descartarDatosPrerrequisito();
  }
  ngOnInit() {}

  descartarDatosPrerrequisito(){
    this.fpuna.getPrerrequisitosAll().subscribe(prerrequisitos=>{
      const idCarrera = this.selectedCareerId;
      let aprobadas:any = this.data.materiasAprobadas.flat();
      const todas = this.data.clasesTodas.filter(x => x.career_id == idCarrera)
      console.log('todas', todas);
      
      let ids_aprobadas = todas.filter(x => aprobadas.includes(x.name)).map(x=>x._id);

      aprobadas = todas.filter(x=>ids_aprobadas.includes(x._id));
      console.log('aprobadas', aprobadas);
      
      let candidatos:any[] = todas;
      console.log('antes de creditos', candidatos);

      //Filtrar por creditos
      let totalCreditosApro = 0;
      aprobadas.map(x => totalCreditosApro += x.credits);
      let totalCreditosCarrera = 1;
      todas.map(x => totalCreditosCarrera += x.credits);
      if (totalCreditosCarrera==0)
        totalCreditosCarrera=1
      const porcentajeCreditos = totalCreditosApro / totalCreditosCarrera
      console.log('total', totalCreditosCarrera);
      

      candidatos = candidatos.filter(x => x.credits_percentage_required <= porcentajeCreditos);
      console.log('despues de creditos', candidatos);
      

      //Filtra prerrequisitos
      candidatos = candidatos.filter(materia=>{
        let prePorMateria: any[] = prerrequisitos.filter(x => x.class2_id == materia._id).map(x => x.class1_id);
        let poseePres = prePorMateria.every(x=>ids_aprobadas.includes(x))
        return poseePres;
      })

      // Excluir aprobados
      candidatos = candidatos.filter(x=>!ids_aprobadas.includes(x._id))

      //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]
      let c: any= [];
      candidatos.forEach(x=>{
        let  index = c.findIndex(y=>y.semestre == x.semester)
        if(index == -1){
          c.push({
            semestre:x.semester,
            materias:[{nombre:x.name}]
          })
        }else{
          c[index].materias.push({ nombre: x.name })
        }
      })
      
      // Ordenar
      this.semestersClasses = c.sort((x, y) => x.semestre - y.semestre);
      this.semestersClasses.map(x => x.materias.sort((x, y) => x.sem > y.sem));
      console.log('this.semestersClasses', this.semestersClasses)
      

      
    });
  }

  getData() {
    this.fpuna.getClasesAll().subscribe((r) => {
      this.data.clasesTodas=r;

      //filtrar materias para esta carrera
      r = r.filter(x=>x.career_id == this.selectedCareerId)

      //Transformar formato a [{'materias':{'materias':[],'isChecked'=false}}]
      let c: any = [];
      r.forEach(x => {
        let index = c.findIndex(y => y.semestre == x.semester)
        if (index == -1) {
          c.push({
            semestre: x.semester,
            materias: [{ nombre: x.name }]
          })
        } else {
          c[index].materias.push({ nombre: x.name })
        }
      })

      //ordenar
      this.semestersClasses = c.sort((x, y) => x.semestre - y.semestre);
      this.semestersClasses.map(x => x.materias.sort((x, y) => x.sem > y.sem));

      console.log(JSON.stringify(this.semestersClasses));
      
    });
  }

  checkCheckbox(ev: Event, index: number) {
    setTimeout(() => {
      this.semestersClasses[index].materias.forEach((materia) => {
        materia["isItemChecked"] = this.semestersClasses[index].checkParent;
      });
    });
    console.log('checkbox(?');
    
  }

  verifyEvent(index: number) {
    const allItems = this.semestersClasses[index].materias.length;
    let selected = 0;

    this.semestersClasses[index].materias.map((item) => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.semestersClasses[index].indeterminateState = true;
      this.semestersClasses[index].checkParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.semestersClasses[index].checkParent = true;
      this.semestersClasses[index].indeterminateState = false;
    } else {
      // No item is selected
      this.semestersClasses[index].indeterminateState = false;
      this.semestersClasses[index].checkParent = false;
    }

    // Obtener materias seleccionadas
    let materiasSeleccionadas=[]
    this.semestersClasses.filter(x=>x.materias)
    for (const semestres of this.semestersClasses) {
      for (const materia of semestres.materias) {
        if(materia.isItemChecked)
          materiasSeleccionadas.push(materia.nombre)
      }
    }

    this.seleccionados.emit(materiasSeleccionadas);
    
  }

}
