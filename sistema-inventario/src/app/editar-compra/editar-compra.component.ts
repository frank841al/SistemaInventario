import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComprasService } from "../compras.service"
import { Compra } from '../compra';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent implements OnInit {

  public compra: Compra = new Compra("", 0, 0 , 0,"");

  constructor(private route: ActivatedRoute,
    private router: Router, private comprasService: ComprasService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idCompra = this.route.snapshot.paramMap.get("id");
    this.comprasService.getCompra(idCompra).subscribe((compra: Compra) => this.compra = compra)

  }
  volver() {
    this.router.navigate(['/compras']);
  }

  onSubmit() {
    this.comprasService.updateCompra(this.compra).subscribe(() => {
      this.snackBar.open('Compra actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }


}
