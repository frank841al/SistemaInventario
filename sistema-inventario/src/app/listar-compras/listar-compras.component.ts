import { Component, OnInit } from '@angular/core';
import { ComprasService } from "../compras.service"
import { Compra } from "../compra"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {
  public compras: Compra[] = [
    new Compra("", 0, 0, 0,"")
  ];
 
  constructor(private comprasService: ComprasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarCompra(compra: Compra) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la compra ${compra.n_factura}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.comprasService
          .deleteCompra(compra)
          .subscribe(() => {
            this.obtenerCompras();
            this.snackBar.open('Compra eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerCompras();
  }
  obtenerCompras() {
    return this.comprasService
      .getCompras()
      .subscribe((compras: Compra[]) => this.compras = compras);
  }

}
