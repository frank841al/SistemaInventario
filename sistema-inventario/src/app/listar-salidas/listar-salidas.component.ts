import { Component, OnInit } from '@angular/core';
import { SalidasService } from "../salidas.service"
import { Salida } from "../salida"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-salidas',
  templateUrl: './listar-salidas.component.html',
  styleUrls: ['./listar-salidas.component.css']
})
export class ListarSalidasComponent implements OnInit {
  public salidas: Salida[] = [
    new Salida(0, "")
  ];

  constructor(private salidasService: SalidasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }
 
  eliminarSalida(salida: Salida) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la salida ${salida.cantidad}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.salidasService
          .deleteSalida(salida)
          .subscribe(() => {
            this.obtenerSalidas();
            this.snackBar.open('Salida eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerSalidas();
  }

obtenerSalidas() {
    return this.salidasService
      .getSalidas()
      .subscribe((salidas: Salida[]) => this.salidas = salidas);
  }
}
