
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios.service"
import { Usuario } from "../usuario"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  public usuarios: Usuario[] = [
    new Usuario("", "")
  ];

  constructor(private usuariosService: UsuariosService, private dialogo: MatDialog, private snackBar: MatSnackBar){}
  
    eliminarUsuario(usuario: Usuario) {
      this.dialogo
        .open(DialogoConfirmacionComponent, {
          data: `¿Realmente quieres eliminar a ${usuario.nombre}?`
        })
        .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (!confirmado) return;
          this.usuariosService
            .deleteUsuario(usuario)
            .subscribe(() => {
              this.obtenerUsuarios();
              this.snackBar.open('Usuario eliminado', undefined, {
                duration: 1500,
              });
            });
        })
    }
 
  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    return this.usuariosService
      .getUsuarios()
      .subscribe((usuarios: Usuario[]) => this.usuarios = usuarios);
  }

}
