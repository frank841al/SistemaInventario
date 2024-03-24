import { Component, OnInit } from '@angular/core';
import { Salida } from '../salida';
import { SalidasService } from "../salidas.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-salida',
  templateUrl: './agregar-salida.component.html',
  styleUrls: ['./agregar-salida.component.css']
})
export class AgregarSalidaComponent implements OnInit {

  constructor(private salidasService: SalidasService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  salidaModel = new Salida(0,"",0)

  onSubmit() {
    this.salidasService.addSalida(this.salidaModel).subscribe(() => {
      this.snackBar.open('Salida guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/salidas']);
    })
  }

}
