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
  cardType: string;
  cardTypes: string[];
  type: string;
  taskListCurrent: Todo[];
  taskListFinished: Todo[];
  taskListUnsorted: Todo[];
  toggle = true;
  status = 'Enable';

  constructor(
    private _snackBar: MatSnackBar,
  ) {
    this.task = new Todo();
    this.cardType = '';
    this.cardTypes = ['finished', 'current', 'unsorted'];
    this.taskListCurrent = new Array<Todo>();
    this.taskListFinished = new Array<Todo>();
    this.taskListUnsorted = new Array<Todo>();
  }

  ngOnInit(): void {
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  getTaskType(type: any) {
    this.type = type;
  }

  createTask(newTask: any) {
    newTask.taskType = this.type;
    this.addTaskToList(newTask)
  }

  addTaskToList(task: any) {
    switch (this.type) {
      case 'finished':
        this.taskListFinished.push(task);
        break;
      case 'current':
        this.taskListCurrent.push(task);
        break;
      case 'unsorted':
        this.taskListUnsorted.push(task);
        break;
    }

    this.task = new Todo();
  }

  resortTask(data: any) {
    this.taskListCurrent.filter((value, index) => {
      if(data == value) {
        this.taskListCurrent.splice(index,1)
      }
    })
    this.taskListFinished.push(data);
  }

  resortTaskToCurrent(data: any) {
    this.taskListFinished.filter((value, index) => {
      if(data == value) {
        this.taskListFinished.splice(index, 1)
      }
    })
    this.taskListCurrent.push(data);
  }

  deleteTask(task: any) {
    this.taskListFinished.filter((value, index) => {
      if(task == value) {
        this.taskListFinished.splice(index, 1)
      }
    })

    this.taskListCurrent.filter((value, index) => {
      if(task == value) {
        this.taskListCurrent.splice(index,1)
      }
    })


  }

}
