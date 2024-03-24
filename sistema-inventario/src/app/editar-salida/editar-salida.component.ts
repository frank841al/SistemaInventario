import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalidasService } from "../salidas.service"
import { Salida } from '../salida';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-salida',
  templateUrl: './editar-salida.component.html',
  styleUrls: ['./editar-salida.component.css']
})
export class EditarSalidaComponent implements OnInit {

  public salida: Salida = new Salida(0, "");

  constructor(private route: ActivatedRoute,
    private router: Router, private salidasService: SalidasService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idSalida = this.route.snapshot.paramMap.get("id");
    this.salidasService.getSalida(idSalida).subscribe((salida: Salida) => this.salida = salida)
  }
  volver() {
    this.router.navigate(['/salidas']);
}
onSubmit() {
  this.salidasService.updateSalida(this.salida).subscribe(() => {
    this.snackBar.open('Salida actualizada', undefined, {
      duration: 1500,
    });
    this.volver();
  });
}

}
