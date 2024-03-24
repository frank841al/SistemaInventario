
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from "../usuarios.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  usuarioModel = new Usuario("","",0)

  onSubmit() {
    this.usuariosService.addUsuario(this.usuarioModel).subscribe(() => {
      this.snackBar.open('Usuario guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/usuarios']);
    })
  }

}
