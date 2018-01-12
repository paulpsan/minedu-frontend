import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy
} from "@angular/core";
import { Usuario } from "../../../models/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../../../services/http.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Chart } from "chart.js";

@Component({
  selector: "hub-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {

  ngOnInit() {

  }
}
