import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilotos } from '../models/piloto';

@Injectable({
  providedIn: 'root',
})
export class PilotosService {

  url = 'http://localhost:4000/pilotos'; // Actualiza la URL base

  constructor(private http: HttpClient) {}

  getPilotos(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePiloto(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  guardarPiloto(piloto: Pilotos): Observable<any> {
    return this.http.post(this.url, piloto);
  }

  verPiloto(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  actualizarPiloto(id: string, piloto: Pilotos): Observable<any> {
    return this.http.put(`${this.url}/${id}`, piloto);
  }
}
