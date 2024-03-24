
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "./usuario"
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.baseUrl}/usuariogetAll.php`);
  }

  getUsuario(id: string | number) {
    return this.http.get(`${this.baseUrl}/usuarioget.php?idUsuario=${id}`);
  }

  addUsuario(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}/postusuario.php`, usuario);
  }

  deleteUsuario(usuario: Usuario) {
    return this.http.delete(`${this.baseUrl}/usuariodelete.php?idUsuario=${usuario.id}`);
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put(`${this.baseUrl}/usuarioupdate.php`, usuario);
  }
}
