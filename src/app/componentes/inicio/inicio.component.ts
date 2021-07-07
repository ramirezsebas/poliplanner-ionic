import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ModalController, IonContent, IonSegment } from "@ionic/angular";
import { DataService } from "src/app/services/data.service";
import { IonSlides } from "@ionic/angular";
import MatForView from "src/app/models/Views.model";
import Schedule from "src/app/models/Schedule";

class Item {
  constructor(
    public nombre: string,
    public horario: string,
    public lab: boolean
  ) {}
}

class DayTab {
  constructor(public nombre: string, public clases: Item[]) {}
}

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  @Input() semana: DayTab[];
  @Input() toCalendar: Schedule[];
  @ViewChild("segment", { static: true }) segment: IonSegment;

  slideOpts = {
    initialSlide: new Date().getDay() - 1,
    pagination: true,
  };

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.toCalendar, typeof this.toCalendar);

    this.semana = [
      new DayTab("Lunes", []),
      new DayTab("Martes", []),
      new DayTab("Miércoles", []),
      new DayTab("Jueves", []),
      new DayTab("Viernes", []),
      new DayTab("Sábado", []),
    ];
    this.init();

    this.segment.value = (new Date().getDay() - 1).toString();
  }

  ionViewWillEnter() {
    this.init();
  }
  /**
   * Inicio
   */

  init() {
    // Get data from
    const data = this.toCalendar;

    if (data) {
      //formatearDatos();
      const horLab = /[\d]*[\:][\d]* - [\d]*[\:][\d]*.?\(L\)/g;
      let horNormal = /([\d]*[\:][\d]* - [\d]*[\:][\d]*)+/g;

      this.semana.forEach((dia: DayTab) => {
        data.forEach((element: Schedule) => {
          const nombreDia = dia.nombre.toLowerCase()
          let horario = element.dias[nombreDia];
          if (
            horario &&
            horario.match(horNormal) &&
            horario.match(horNormal).lenght != 0
          ) {
            let horarioLab = horario.match(horLab);
            horario = horario.replace(horLab, "");
            let horarios = horario.match(horNormal);

            if (horarioLab)
              dia.clases.push(
                new Item(
                  element.asignatura.name,
                  horarioLab[0].match(horNormal)[0].replace("-", "a"),
                  true
                )
              );
            if (horarios)
              dia.clases.push(
                new Item(
                  element.asignatura.name,
                  horarios[0].replace("-", "a"),
                  false
                )
              );
          }
        });
      });

      // Ordeno por hora
      // this.semana.forEach(dia=> dia.clases.sort((a,b)=>a.horario>b.horario))
      this.semana.forEach((dia) =>
        dia.clases.sort((a, b) => (a.horario > b.horario ? 1 : -1))
      );
      console.log(this.semana);
    } else {
      // console.log('hola2: toCalendar no tiene nada')
      //let semana = window.localStorage.getItem("semana");
      // console.log(JSON.parse(semana));
      //
      //if (semana) {
      //  this.data.semana = JSON.parse(semana);
      //}
    }
  }

  /**
   * Html Controllers
   */
  segmentChanged(ev: any, slides: any) {
    slides.slideTo(ev.detail.value);
  }

  async ionSlideDidChange(ev: any, segment: any, slides: any) {
    let index = await slides.getActiveIndex();

    segment.value = index;

    let active = segment.el.childNodes[index];
    active.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  @ViewChild(IonContent, { static: false }) content: IonContent;
  async onSlideChanged(): Promise<void> {
    // console.log(this.content);

    this.content.scrollToTop;
  }
}
