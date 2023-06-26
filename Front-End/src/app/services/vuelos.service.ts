import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelos } from '../models/vuelo';

@Injectable({
  providedIn: 'root',
})
export class VuelosService {

  url = 'http://localhost:4000/vuelos';

  constructor(private http: HttpClient) {}

  getVuelos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteVuelos(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarVuelos(vuelos: Vuelos): Observable<any> {
    return this.http.post(this.url, vuelos);
  }

  verVuelos(id?: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarVuelos(id: string, vuelos: Vuelos): Observable<any> {
    return this.http.put(this.url + id, vuelos);
  }
}
