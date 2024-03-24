import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../empleados.service"
import { Empleado } from "../empleado"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  public empleados: Empleado[] = [
    new Empleado("", "", 0, 0, "", "")
  ];

  constructor(private empleadosService: EmpleadosService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarEmpleado(empleado: Empleado) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${empleado.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.empleadosService
          .deleteEmpleado(empleado)
          .subscribe(() => {
            this.obtenerEmpleados();
            this.snackBar.open('Empleado eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    return this.empleadosService
      .getEmpleados()
      .subscribe((empleados: Empleado[]) => this.empleados = empleados);
  }

}
