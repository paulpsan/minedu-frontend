import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "inicio",
    loadChildren: "./pages/inicio/inicio.module#InicioModule"
  },
  {
    path: "usuarios",
    loadChildren: "./pages/usuarios/usuarios.module#UsuariosModule",
  },
  {
    path: "**",
    redirectTo: "login",
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
