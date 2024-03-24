import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from "../usuarios.service"
import { Usuario } from '../usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario("", "");

  constructor(private route: ActivatedRoute,
    private router: Router, private usuariosService: UsuariosService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idUsuario = this.route.snapshot.paramMap.get("id");
    this.usuariosService.getUsuario(idUsuario).subscribe((usuario: Usuario) => this.usuario = usuario)
  }

  volver() {
    this.router.navigate(['/usuarios']);
  }

  onSubmit() {
    this.usuariosService.updateUsuario(this.usuario).subscribe(() => {
      this.snackBar.open('Usuario actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}

