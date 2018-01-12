import { CrearEditarComponent } from "./crear-editar/crear-editar.component";
import { UsuariosComponent } from "./usuarios.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from "./usuario/usuario.component";

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      { path: "", component: CrearEditarComponent },
      { path: "adicionar", component: CrearEditarComponent },
      { path: ":id", component: UsuarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
