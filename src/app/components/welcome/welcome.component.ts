import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Welcome} from "../../../modules/welcome";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  task: Welcome;

  constructor(
    private _snackBar: MatSnackBar,
  ) {
    this.task = new Welcome();
  }

  ngOnInit(): void {
  }

}
