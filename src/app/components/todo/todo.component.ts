import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Todo} from "../../../modules/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: Todo;
  cardTypes: string[];
  cardType: string;

  constructor(
    private _snackBar: MatSnackBar,
  ) {
    this.task = new Todo();
    this.cardTypes = new Array<string>();
    this.cardType = '';
  }

  ngOnInit(): void {
    this.show()
  }

  show() {
    console.log(this.task.notes, this.task.taskname)
  }

  //add a new user defined cardType to the array
  addCardTypes(newCard: string) {
    if (newCard) {
      this.cardTypes.push(newCard); //add a new user defined cardType
    }
  }

}
