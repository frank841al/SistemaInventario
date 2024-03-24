import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadosService } from "../empleados.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  constructor(private empleadosService: EmpleadosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  empleadoModel = new Empleado("", "",0 ,0 ,"" ,"" ,0)

  onSubmit() {
    this.empleadosService.addEmpleado(this.empleadoModel).subscribe(() => {
      this.snackBar.open('Empleado guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/empleados']);
    })
  }

}
