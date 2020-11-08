import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Todo} from "../../../modules/todo";
import {Router} from "@angular/router";
import {MatChip} from "@angular/material/chips";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task: Todo;
  cardType: string;
  cardTypes: string[];
  type: string;
  taskListCurrent: Todo[];
  taskListFinished: Todo[];

  constructor(
    private _snackBar: MatSnackBar,
    private route: Router,
  ) {
    this.task = new Todo();
    this.cardType = '';
    this.cardTypes = ['finished', 'current'];
    this.taskListCurrent = new Array<Todo>();
    this.taskListFinished = new Array<Todo>();
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    let snackBar = this._snackBar.open(message)._dismissAfter(4000)
  }

  navigate() {
    this.route.navigate(['welcome']);
  }

  verifyDate(newTask: any) { //
    if(newTask.dueDate < newTask.startDate) {
      this.openSnackBar('The due date can not be before the start date!')
      return false;
    }
    return true;
  }

  getTaskType(type: any) {
    this.type = type;
  }

  createTask(newTask: any) {
    newTask.taskType = this.type;
    if (this.verifyDate(newTask)) { //
      this.addTaskToList(newTask) //
    }
  }

  reset() {
    this.task = new Todo();
  }

  addTaskToList(task: any) {
    switch (this.type) {
      case 'finished':
        this.taskListFinished.push(task);
        break;
      case 'current':
        this.taskListCurrent.push(task);
        break;
    }

    this.task = new Todo();
  }

  resortTaskToFinished(data: any) {
    this.taskListCurrent.filter((value, index) => {
      if (data == value) {
        this.taskListCurrent.splice(index, 1)
      }
    })
    this.taskListFinished.push(data);
  }

  resortTaskToCurrent(data: any) {
    this.taskListFinished.filter((value, index) => {
      if (data == value) {
        this.taskListFinished.splice(index, 1)
      }
    })
    this.taskListCurrent.push(data);
  }

  deleteTask(task: any, tasktype: string) {
    switch (tasktype) {
      case 'current':
        this.taskListCurrent.filter((value, index) => {
          if (task == value) {
            this.taskListCurrent.splice(index, 1)
          }
        })
        break;
      case 'finished':
        this.taskListFinished.filter((value, index) => {
          if (task == value) {
            this.taskListFinished.splice(index, 1)
          }
        })
        break;
    }

  }

}
