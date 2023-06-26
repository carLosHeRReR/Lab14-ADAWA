import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from '../models/avion';

@Injectable({
  providedIn: 'root'
})
export class AvionesService {

  url = 'http://localhost:4000/api/avion';

  constructor(private http: HttpClient) {

  }

  getAviones(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteAviones(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarAviones(tipo: Avion): Observable<any> {
    return this.http.post(this.url, tipo);
  }

  viewAviones(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarAviones(id: string, tipo: Avion): Observable<any> {
    return this.http.put(this.url + id, tipo);
  }

}
