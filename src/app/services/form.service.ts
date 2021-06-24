import { Injectable } from "@angular/core";
import Career from "../models/Career";
import Subject from "../models/Subject";

@Injectable({
  providedIn: "root",
})
export class FormService {
  contadorCarrera: any;
  carreras: Career[];
  toCalendar: any=[];
  esAprobar: boolean;
  seccionesElegidas: any;
  seccionesElegidasForView: any = [];

  public seccionActual: number = 1;
  public dataFromExcel: any;
  public materiasSeleccionadas: string[][] = Array(24);
  public materiasAprobadas: string[][] = Array(24);
  clasesTodas: Subject[];

  constructor() {}
}
