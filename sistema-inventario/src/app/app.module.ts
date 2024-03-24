
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';
import { ListarArticulosComponent } from './listar-articulos/listar-articulos.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';

import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { ListarProveedoresComponent } from './listar-proveedores/listar-proveedores.component';

import { AgregarCompraComponent } from './agregar-compra/agregar-compra.component';
import { EditarCompraComponent } from './editar-compra/editar-compra.component';
import { ListarComprasComponent } from './listar-compras/listar-compras.component';

import { AgregarSalidaComponent } from './agregar-salida/agregar-salida.component';
import { EditarSalidaComponent } from './editar-salida/editar-salida.component';
import { ListarSalidasComponent } from './listar-salidas/listar-salidas.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarArticuloComponent,
    EditarArticuloComponent,
    ListarArticulosComponent,
    DialogoConfirmacionComponent,
    AcercaDeComponent,

    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadosComponent,
    
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuariosComponent,
    
    AgregarProveedorComponent,
    EditarProveedorComponent,
    ListarProveedoresComponent,

    AgregarCompraComponent,
    EditarCompraComponent,
    ListarComprasComponent,
    
    AgregarSalidaComponent,
    EditarSalidaComponent,
    ListarSalidasComponent,
    
    
  ],
  entryComponents: [
    DialogoConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
