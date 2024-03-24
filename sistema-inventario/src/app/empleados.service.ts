import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from "./empleado";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get(`${this.baseUrl}/empleadogetAll.php`);
  }

  getEmpleado(id: string | number) {
    return this.http.get(`${this.baseUrl}/empleadoget.php?idEmpleado=${id}`);
  }

  addEmpleado(empleado: Empleado) {
    return this.http.post(`${this.baseUrl}/postempleado.php`, empleado);
  }

  deleteEmpleado(empleado: Empleado) {
    return this.http.delete(`${this.baseUrl}/empleadodelete.php?idEmpleado=${empleado.id}`);
  }

  updateEmpleado(empleado: Empleado) {
    return this.http.put(`${this.baseUrl}/empleadoupdate.php`, empleado);
  }
}
