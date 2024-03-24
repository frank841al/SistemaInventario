
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from "./articulo"
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getArticulos() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getArticulo(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idArticulo=${id}`);
  }

  addArticulo(articulo: Articulo) {
    return this.http.post(`${this.baseUrl}/post.php`, articulo);
  }

  deleteArticulo(articulo: Articulo) {
    return this.http.delete(`${this.baseUrl}/delete.php?idArticulo=${articulo.id}`);
  }

  updateArticulo(articulo: Articulo) {
    return this.http.put(`${this.baseUrl}/update.php`, articulo);
  }
}
