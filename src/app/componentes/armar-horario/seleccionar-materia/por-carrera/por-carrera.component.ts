import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FpunaService } from 'src/app/services/fpuna.service';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-por-carrera',
  templateUrl: './por-carrera.component.html',
  styleUrls: ['./por-carrera.component.scss'],
})
export class PorCarreraComponent implements OnInit {

  @Input() data:DataService;
  @Input() selectedCareerId;
  @Input() esAprobar = false;
  @Input() esCargarHorario;
  @Output() seleccionados = new EventEmitter();
  semestersClasses: any[];
  maxHeight=[];

  constructor(private fpuna: FpunaService) {
  }
  ngOnInit() {
    console.log(this.data.materiasAprobadas);
    
    
    // console.log(this.data);
    
    if (this.esAprobar){
      // console.log('esto aprov');
      
      this.getData();
      
    }
    else
      this.descartarDatosPrerrequisito();
  }

  descartarDatosPrerrequisito(){
    this.fpuna.getPrerrequisitosAll().subscribe(prerrequisitos=>{
      const idCarrera = this.selectedCareerId;
      
      let aprobadas:any = this.data.materiasAprobadas[this.selectedCareerId];
      if(!this.data.materiasAprobadas[this.selectedCareerId])
        aprobadas = []
      
        // console.log('todas', todas);
      if(this.esCargarHorario) {
        this.data.clasesTodas = undefined
        this.getData()
      } 
      const todas = this.data.clasesTodas.filter(x => x.career_id == idCarrera)
      
      let ids_aprobadas = todas.filter(x => aprobadas.includes(x.name)).map(x=>x._id);

      aprobadas = todas.filter(x=>ids_aprobadas.includes(x._id));
      console.log('aprobadas', aprobadas);
      
      let candidatos:any[] = todas;
      // console.log('antes de creditos', candidatos);

      //Filtrar por creditos
      let totalCreditosApro = 0;
      aprobadas.map(x => totalCreditosApro += x.credits);
      let totalCreditosCarrera = 1;
      todas.map(x => totalCreditosCarrera += x.credits);
      if (totalCreditosCarrera==0)
        totalCreditosCarrera=1
      const porcentajeCreditos = totalCreditosApro / totalCreditosCarrera
      // console.log('total', totalCreditosCarrera);
      

      candidatos = candidatos.filter(x => x.credits_percentage_required <= porcentajeCreditos);
      // console.log('despues de creditos', candidatos);
      

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
      this.semestersClasses.map(x => x.materias.sort((x, y) => x.sem > y.sem?1:-1));
      console.log('this.semestersClasses', this.semestersClasses)
      
      const marcados = this.data.materiasSeleccionadas[this.selectedCareerId]
      if (marcados)
        marcados.forEach(toCheck =>{
          this.semestersClasses.forEach(sem=>sem.materias.forEach(materia=>{

            if(toCheck == materia.nombre) materia.isItemChecked=true  
          }))
        })

      
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

      // console.log(JSON.stringify(this.semestersClasses));
      // console.log(this.semestersClasses);
      // console.log('hola');

      // Marcar los ya marcados anteriormente
      const marcados = this.data.materiasAprobadas[this.selectedCareerId]
      if (marcados)
        marcados.forEach(toCheck =>{
          this.semestersClasses.forEach(sem=>sem.materias.forEach(materia=>{

            if(toCheck == materia.nombre) materia.isItemChecked=true  
          }))
        })
    });
  }

  checkCheckbox(ev: Event, index: number) {
    // console.log('antes',document.getElementById('0').style.maxHeight);
    let aux = document.getElementById(index.toString()).style.maxHeight;
    
    // Marcar los demas(?
    setTimeout(() => {
      this.semestersClasses[index].materias.forEach((materia) => {
        materia["isItemChecked"] = this.semestersClasses[index].checkParent;
      });
    });
    // console.log('despues',document.getElementById('0').style.maxHeight);

    // console.log(aux);
    this.toggleCollapse(document.getElementById(index.toString()))

    // console.log('checkbox(?');
    
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

  expandItem(e){
    let colapsible = e.target
    while(!colapsible.classList.contains('collapsible')) colapsible = colapsible.parentElement
    colapsible.classList.toggle("active");
    let content = colapsible.nextElementSibling;
    this.toggleCollapse(content);
    
  }

  toggleCollapse(content){
    if (content.style.maxHeight){
      content.style.setProperty('max-height',null)
    } else {
      content.style.setProperty('max-height',content.scrollHeight+'px')
    }   
  }
  estaActivo(i){
    const aux = document.getElementById(i.toString())
    if(aux)
      return document.getElementById(i.toString()).previousElementSibling.classList.contains('active')
    else return false
  }
}
