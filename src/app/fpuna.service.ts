import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FpunaService {
  carreras: any

  constructor(private http: HttpClient) {
  }

  getCarrerasAll(): Observable<any>{
    return this.http.get('./../assets/carreras.json')
  }

  getClasesAll(): Observable<any>{
    return this.http.get('./../assets/clases.json')
  }

  getPrerrequisitosAll(): Observable<any>{
    return this.http.get('./../assets/prerrequisitos.json')
  }
}
