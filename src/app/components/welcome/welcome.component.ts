import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
  }

  /*public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: [{data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86]}];
*/

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public lineChartLabels = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Finished'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Current'},
    {data: [20, 40, 40, 10, 80, 20, 100], label: 'Unsorted'},
  ]

  goToTodo() {
    this.route.navigate(['todo']);
  }

}
