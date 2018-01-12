import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../../models/usuario";

@Component({
  selector: "hub-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public identity;
  title = "hub";
  navLinks: any[] = [
    {
      label: "inicio",
      path: "/proyectos"
    },
    {
      label: "Usuarios",
      path: "/usuarios"
    }
  ];

  constructor(
    private _authService :AuthService,
    private router: Router,) {}

  ngOnInit() {
    if (localStorage.getItem("identity")) {
      this.identity = JSON.parse(localStorage.getItem("identity"));
      console.log(this.identity);
    }

  }
}
