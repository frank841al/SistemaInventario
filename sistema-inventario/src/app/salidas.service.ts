
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salida } from "./salida"
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SalidasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getSalidas() {
    return this.http.get(`${this.baseUrl}/salidagetAll.php`);
  }

  getSalida(id: string | number) {
    return this.http.get(`${this.baseUrl}/salidaget.php?idSalida=${id}`);
  }

  addSalida(salida: Salida) {
    return this.http.post(`${this.baseUrl}/postsalida.php`, salida);
  }

  deleteSalida(salida: Salida) {
    return this.http.delete(`${this.baseUrl}/salidadelete.php?idSalida=${salida.id}`);
  }

  updateSalida(salida: Salida) {
    return this.http.put(`${this.baseUrl}/salidaupdate.php`, salida);
  }
}
