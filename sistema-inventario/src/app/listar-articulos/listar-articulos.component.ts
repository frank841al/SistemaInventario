
import { Component, OnInit } from '@angular/core';
import { ArticulosService } from "../articulos.service"
import { Articulo } from "../articulo"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-articulos',
  templateUrl: './listar-articulos.component.html',
  styleUrls: ['./listar-articulos.component.css']
})
export class ListarArticulosComponent implements OnInit {
  public articulos: Articulo[] = [
    new Articulo("", "", 0, 0)
  ];

  constructor(private articulosService: ArticulosService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarArticulo(articulo: Articulo) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el articulo ${articulo.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.articulosService
          .deleteArticulo(articulo)
          .subscribe(() => {
            this.obtenerArticulos();
            this.snackBar.open('Articulo eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerArticulos();
  }

  obtenerArticulos() {
    return this.articulosService
      .getArticulos()
      .subscribe((articulos: Articulo[]) => this.articulos = articulos);
  }

}
