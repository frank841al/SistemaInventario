
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedoresService } from "../proveedores.service"
import { Proveedor } from '../proveedor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  public proveedor: Proveedor = new Proveedor("", "", "" , "", "", "","");

  constructor(private route: ActivatedRoute,
    private router: Router, private proveedoresService: ProveedoresService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idProveedor = this.route.snapshot.paramMap.get("id");
    this.proveedoresService.getProveedor(idProveedor).subscribe((proveedor: Proveedor) => this.proveedor = proveedor)
  }

  volver() {
    this.router.navigate(['/proveedores']);
}
onSubmit() {
  this.proveedoresService.updateProveedor(this.proveedor).subscribe(() => {
    this.snackBar.open('Proveedor actualizado', undefined, {
      duration: 1500,
    });
    this.volver();
  });
}

}
