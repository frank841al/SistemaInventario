
import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { ComprasService } from "../compras.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-compra',
  templateUrl: './agregar-compra.component.html',
  styleUrls: ['./agregar-compra.component.css']
})
export class AgregarCompraComponent implements OnInit {

  constructor(private comprasService: ComprasService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  compraModel = new Compra("",0,0,0,"",0)

  onSubmit() {
    this.comprasService.addCompra(this.compraModel).subscribe(() => {
      this.snackBar.open('Compra guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/compras']);
    })
  }

}
