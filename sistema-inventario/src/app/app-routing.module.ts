
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { ListarArticulosComponent } from './listar-articulos/listar-articulos.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';

import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

import { AgregarCompraComponent } from './agregar-compra/agregar-compra.component';
import { ListarComprasComponent } from './listar-compras/listar-compras.component';
import { EditarCompraComponent } from './editar-compra/editar-compra.component';

import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { ListarProveedoresComponent } from './listar-proveedores/listar-proveedores.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';

import { AgregarSalidaComponent } from './agregar-salida/agregar-salida.component';
import { ListarSalidasComponent } from './listar-salidas/listar-salidas.component';
import { EditarSalidaComponent } from './editar-salida/editar-salida.component';


const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "articulos", component: ListarArticulosComponent },
  { path: "articulos/agregar", component: AgregarArticuloComponent },
  { path: "articulos/editar/:id", component: EditarArticuloComponent },
 
  { path: "empleados", component: ListarEmpleadosComponent },
  { path: "empleados/agregar", component: AgregarEmpleadoComponent },
  { path: "empleados/editar/:id", component: EditarEmpleadoComponent },
  
  { path: "usuarios", component: ListarUsuariosComponent },
  { path: "usuarios/agregar", component: AgregarUsuarioComponent },
  { path: "usuarios/editar/:id", component: EditarUsuarioComponent },
 
  { path: "proveedores", component: ListarProveedoresComponent },
  { path: "proveedores/agregar", component: AgregarProveedorComponent },
  { path: "proveedores/editar/:id", component: EditarProveedorComponent },

  { path: "compras", component: ListarComprasComponent },
  { path: "compras/agregar", component: AgregarCompraComponent },
  { path: "compras/editar/:id", component: EditarCompraComponent },

  { path: "salidas", component: ListarSalidasComponent },
  { path: "salidas/agregar", component: AgregarSalidaComponent },
  { path: "salidas/editar/:id", component: EditarSalidaComponent },


  { path: "", redirectTo: "/articulos", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/articulos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

