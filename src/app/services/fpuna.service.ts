import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Career from '../models/Career';
import Subject from '../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class FpunaService {
  carreras: any

  constructor(private http: HttpClient) {
  }

  getCarrerasAll(): Observable<Career[]>{
    return this.http.get<Career[]>('./../assets/carreras.json') 
  }

  getClasesAll(): Observable<Subject[]>{
    return this.http.get<Subject[]>('./../assets/clases.json')
  }

  getPrerrequisitosAll(): Observable<any>{
    return this.http.get('./../assets/prerrequisitos.json')
  }
}
