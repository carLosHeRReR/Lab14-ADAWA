import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tripulacion } from '../models/tripulacion';

@Injectable({
  providedIn: 'root'
})
export class TripulacionService {

  url = 'http://localhost:4000/api/tripulacion';

  constructor(private http: HttpClient) {

  }

  getTripulacion(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteTripulacion(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarTripulacion(nombre: Tripulacion): Observable<any> {
    return this.http.post(this.url, nombre);
  }

  viewTripulacion(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizaTripulacion(id: string, nombre: Tripulacion): Observable<any> {
    return this.http.put(this.url + id, nombre);
  }

}
