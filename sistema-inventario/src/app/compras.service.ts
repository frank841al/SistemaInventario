import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from "./compra"
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCompras() {
    return this.http.get(`${this.baseUrl}/compragetAll.php`);
  }

  getCompra(id: string | number) {
    return this.http.get(`${this.baseUrl}/compraget.php?idCompra=${id}`);
  }

  addCompra(compra: Compra) {
    return this.http.post(`${this.baseUrl}/postcompra.php`, compra);
  }

  deleteCompra(compra: Compra) {
    return this.http.delete(`${this.baseUrl}/compradelete.php?idCompra=${compra.id}`);
  }

  updateCompra(compra: Compra) {
    return this.http.put(`${this.baseUrl}/compraupdate.php`, compra);
  }
}
