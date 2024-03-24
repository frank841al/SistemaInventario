
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from "./proveedor"
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get(`${this.baseUrl}/proveedorgetAll.php`);
  }

  getProveedor(id: string | number) {
    return this.http.get(`${this.baseUrl}/proveedorget.php?idProveedor=${id}`);
  }

  addProveedor(proveedor: Proveedor) {
    return this.http.post(`${this.baseUrl}/postproveedor.php`, proveedor);
  }

  deleteProveedor(proveedor: Proveedor) {
    return this.http.delete(`${this.baseUrl}/proveedordelete.php?idProveedor=${proveedor.id}`);
  }

  updateProveedor(proveedor: Proveedor) {
    return this.http.put(`${this.baseUrl}/proveedorupdate.php`, proveedor);
  }
}
