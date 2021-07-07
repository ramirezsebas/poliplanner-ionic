import { Injectable } from "@angular/core";
import Career from "../models/Career";
import Schedule from "../models/Schedule";
import Subject from "../models/Subject";
import MatForView from "../models/Views.model";

@Injectable({
  providedIn: "root",
})
export class FormService {
  contadorCarrera: number;
  carreras: Career[];
  toCalendar: Schedule[]=[];
  esAprobar: boolean;
  seccionesElegidas: Schedule[];
  seccionesElegidasForView: MatForView[] = [];

  public seccionActual: number = 1;
  public dataFromExcel: Schedule[][];
  public materiasSeleccionadas: string[][] = Array(24);
  public materiasAprobadas: string[][] = Array(24);
  clasesTodas: Subject[];

  constructor() {}
}
