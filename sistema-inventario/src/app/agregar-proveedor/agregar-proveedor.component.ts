import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedoresService } from "../proveedores.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {

  constructor(private proveedoresService: ProveedoresService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  proveedorModel = new Proveedor("","","","","","","",0)

  onSubmit() {
    this.proveedoresService.addProveedor(this.proveedorModel).subscribe(() => {
      this.snackBar.open('Proveedor guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/proveedores']);
    })
  }
}
