
import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticulosService } from "../articulos.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css']
})
export class AgregarArticuloComponent implements OnInit {

  constructor(private articulosService: ArticulosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  articuloModel = new Articulo("","",0,0,0)

  onSubmit() {
    this.articulosService.addArticulo(this.articuloModel).subscribe(() => {
      this.snackBar.open('Articulo guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/articulos']);
    })
  }

}
