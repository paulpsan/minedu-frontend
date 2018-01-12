import { error } from "selenium-webdriver";
import { GLOBAL } from "./../../services/global";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";
import qs from "querystringify";
@Component({
  selector: "hub-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {

  ngOnInit() {

  }
}
