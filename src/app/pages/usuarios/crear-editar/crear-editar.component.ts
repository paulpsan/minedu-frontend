import { slideInDownAnimation } from '../../../animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario }from '../../../models/usuario'
import { UsuariosService } from '../../../services/usuarios.service';
import { UsuariosComponent } from '../usuarios.component';


@Component({
  selector: 'hub-crear-editar',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.css'],
  // animations: [ slideInDownAnimation ]
})
export class CrearEditarComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = false;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  userForm: FormGroup;
  show:boolean=false;
  usuario;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService) { }

  ngOnInit() {

    this.userForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });

  }


  onSubmit() {
   
    
  }
}
