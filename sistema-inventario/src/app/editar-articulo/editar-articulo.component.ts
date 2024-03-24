
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticulosService } from "../articulos.service"
import { Articulo } from '../articulo';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {

  public articulo: Articulo = new Articulo("", "", 0 , 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private articulosService: ArticulosService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idArticulo = this.route.snapshot.paramMap.get("id");
    this.articulosService.getArticulo(idArticulo).subscribe((articulo: Articulo) => this.articulo = articulo)
  }

  volver() {
    this.router.navigate(['/articulos']);
  }

  onSubmit() {
    this.articulosService.updateArticulo(this.articulo).subscribe(() => {
      this.snackBar.open('Articulo actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
