import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../../services/http.service";
import { error } from "selenium-webdriver";
import { Usuario } from "../../models/usuario";
import { GLOBAL } from "./../../services/global";

@Component({
  selector: "hub-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private urlGoogle: string = "https://github.com/login/oauth/authorize?client_id=";
  private GOOGLE_CLIENT_ID: string = "becb33a39e525721517c";
  private GOOGLE_CLIENT_SECRET: string = "36338cdf7057d2086495a241fa3d053766da55c1";
  private STATE_GOOGLE: string = "hub-software-github";

  loginForm: FormGroup;
  public usuario: Usuario;
  public token;
  public identity;
  public errorMessage;

  constructor(
    private router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    console.log(localStorage);
    this._authService.logout();


    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl("", Validators.required),
    });
  }

  loginGH() {
    GLOBAL.TOGGLE=true;
    window.location.href =
      this.urlGoogle + this.GOOGLE_CLIENT_ID + "&state=" + this.STATE_GOOGLE;

  }
 
  onSubmit() {
    let email = this.loginForm.controls["email"].value;
    let password = this.loginForm.controls["password"].value;

    this._authService.login('usuarios/login',{email:email,password:password,tipo:'local'}).subscribe(
      response =>{
        console.log(response);
        this.identity=response;
        localStorage.setItem('identity',JSON.stringify(this.identity))
        this.router.navigate(['/inicio']);
        // setTimeout(()=>{
        //   this.router.navigate(['/proyectos']);
        // },300);
      },
      error=>{
        let errorMessage=<any>error;
        console.log(errorMessage.error);
        if (errorMessage!=null){
          this.errorMessage=errorMessage.error.message;
        }
      }
    )
  }
}
