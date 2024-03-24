import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from "../proveedores.service"
import { Proveedor } from "../proveedor"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css']
})
export class ListarProveedoresComponent implements OnInit {
  public proveedores: Proveedor[] = [
    new Proveedor("", "", "", "","","","")
  ];

  constructor(private proveedoresService: ProveedoresService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }
 
  eliminarProveedor(proveedor: Proveedor) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el proveedor ${proveedor.ruc}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.proveedoresService
          .deleteProveedor(proveedor)
          .subscribe(() => {
            this.obtenerProveedores();
            this.snackBar.open('Proveedor eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }
  
  ngOnInit() {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    return this.proveedoresService
      .getProveedores()
      .subscribe((proveedores: Proveedor[]) => this.proveedores = proveedores);
}}
