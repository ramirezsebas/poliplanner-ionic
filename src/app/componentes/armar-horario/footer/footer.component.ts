import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormService } from "src/app/services/form.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @Input() ultimo: number = 3;
  @Input() armar: boolean = true;

  constructor(public formData: FormService) {
    // console.log(this.formData);
  }

  next() {
    console.log(this.formData.carreras, this.formData.contadorCarrera);
    if (this.armar) this.nextArmar();
    else this.nextCargar();
    this.formData.seccionActual++;
  }
  nextCargar() {
    if (this.formData.seccionActual == 1) {
      this.formData.contadorCarrera = this.formData.carreras.length;
      if (this.formData.carreras.length == 0) {
        this.presentToast("Debes seleccionar al menos una Carrera");
        this.formData.seccionActual--;
      }
    } else if (this.formData.seccionActual == 2) {
      if (this.formData.contadorCarrera > 1) {
        this.formData.seccionActual--;
        this.formData.contadorCarrera--;
      } else if (
        !this.formData.materiasSeleccionadas ||
        this.selectedMatOnAllCareer()
      ) {
        this.presentToast(
          "Debes seleccionar al menos una Materia para cada Carrera"
        );
        this.formData.seccionActual--;
      }
    } else if (
      this.formData.seccionActual == 3 &&
      this.formData.toCalendar.length == 0
    ) {
      this.presentToast("Debes seleccionar al menos una Sección");
      this.formData.seccionActual--;
    }
  }
  nextArmar() {
    if (this.formData.seccionActual == 1) {
      this.formData.contadorCarrera = this.formData.carreras.length;
      if (this.formData.carreras.length == 0) {
        this.presentToast("Debes seleccionar al menos una Carrera");
        this.formData.seccionActual--;
      }
    } else if (this.formData.seccionActual == 2) {
      if (this.formData.contadorCarrera > 1) {
        this.formData.seccionActual--;
        this.formData.contadorCarrera--;
      } else this.formData.contadorCarrera = this.formData.carreras.length;
    } else if (this.formData.seccionActual == 3) {
      if (this.formData.contadorCarrera > 1) {
        this.formData.seccionActual--;
        this.formData.contadorCarrera--;
      } else if (
        !this.formData.materiasSeleccionadas ||
        this.selectedMatOnAllCareer()
      ) {
        this.presentToast(
          "Debes seleccionar al menos una Materia para cada Carrera"
        );
        this.formData.seccionActual--;
      }
    } else if (
      this.formData.seccionActual == 4 &&
      this.formData.toCalendar.length == 0
    ) {
      this.presentToast("Debes seleccionar al menos una Sección");
      this.formData.seccionActual--;
    }
  }
  
  selectedMatOnAllCareer() {
    console.log(this.formData.materiasSeleccionadas);
    console.log(this.formData.carreras);

    for (const iterator of this.formData.carreras) {
      if (
        !this.formData.materiasSeleccionadas[iterator.id] ||
        this.formData.materiasSeleccionadas[iterator.id].length == 0
      )
        return true;
    }
    return false;
  }

  previous() {
    if (this.armar) this.previousArmar();
    else this.previousCargar();
    this.formData.seccionActual--;
  }
  previousCargar() {
    if (this.formData.seccionActual == 2) {
      if (this.formData.contadorCarrera < this.formData.carreras.length) {
        this.formData.seccionActual++;
        this.formData.contadorCarrera++;
      } else {
        this.formData.contadorCarrera = 1;
      }
    }
  }
  previousArmar() {
    if (this.formData.seccionActual == 2) {
      if (this.formData.contadorCarrera < this.formData.carreras.length) {
        this.formData.seccionActual++;
        this.formData.contadorCarrera++;
      } else {
        this.formData.contadorCarrera = 1;
      }
    } else if (this.formData.seccionActual == 3) {
      if (this.formData.contadorCarrera < this.formData.carreras.length) {
        this.formData.seccionActual++;
        this.formData.contadorCarrera++;
      } else {
        this.formData.contadorCarrera = 1;
      }
    }
  }

  validarSeccion(x: number) {
    return this.formData.seccionActual === x + 5;
  }

  ngOnInit() {}

  async presentToast(msg = "") {
    const toast = document.createElement("ion-toast");
    toast.message = msg;
    toast.position = "middle";
    toast.duration = 2000;

    document.body.appendChild(toast);
    return toast.present();
  }
}
