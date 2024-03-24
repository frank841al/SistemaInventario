import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from "../empleados.service"
import { Empleado } from '../empleado';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  public empleado: Empleado = new Empleado("raul", "soles", 45415464, 155889655, "fdgfdgfd","fdgdfgfd");

  constructor(private route: ActivatedRoute,
    private router: Router, private empleadosService: EmpleadosService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idEmpleado = this.route.snapshot.paramMap.get("id");
    this.empleadosService.getEmpleado(idEmpleado).subscribe((empleado: Empleado) => this.empleado = empleado)
  }

  volver() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.empleadosService.updateEmpleado(this.empleado).subscribe(() => {
      this.snackBar.open('Empleado actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
