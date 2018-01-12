import { ComunModule } from './../../common/comun.module';
import { HeaderComponent } from '../../common/components/header/header.component';
import { HubInterceptor } from '../../common/interceptor/hub.interceptor';
import { MaterialModule } from '../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioComponent, } from './usuario/usuario.component';
import { InicioModule } from '../inicio/inicio.module';

@NgModule({
  declarations:[
    // HeaderComponent,
    CrearEditarComponent,
    UsuariosComponent,
    UsuarioComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComunModule,

  ],
  exports:[
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HubInterceptor,
      multi: true
    },
    UsuariosService,
    HttpService
  ],
  entryComponents: []
})
export class UsuariosModule   {
}
