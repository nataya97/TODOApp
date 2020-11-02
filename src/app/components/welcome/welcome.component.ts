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

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'Finished'},
    {data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86], label: 'Current'},
  ];
  public barChartColors: Array<any> = [{
    backgroundColor: ["#424242", "#424242", "#424242", "#424242", "#424242", "#424242",
      "#424242", "#424242", "#424242", "#424242", "#424242", "#424242"],
  },
    {
      backgroundColor: ["#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981",
        "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981"]
    }
  ]

  public pieChartLabels = ['Finished', 'Current'];
  public pieChartData = [120, 150];
  public pieChartType = 'pie';
  public pieChartColors: Array<any> = [{
    backgroundColor: ["#424242", "#7c6981"]
  }]

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public lineChartLabels = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Finished'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Current'},
  ]
  public lineChartColors: Array<any> = [
    {
      backgroundColor: "rgba(66, 66, 66, 0.4)",
      pointBackgroundColor: ["#424242", "#424242", "#424242", "#424242", "#424242", "#424242", "#424242"],
      pointBorderColor: ["#424242", "#424242", "#424242", "#424242", "#424242", "#424242", "#424242"]
    },
    {
      backgroundColor: "rgba(124, 105, 129, 0.4)",
      pointBackgroundColor: ["#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981"],
      pointBorderColor: ["#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981", "#7c6981"]
    }

  ]

  goToTodo() {
    this.route.navigate(['todo']);
  }

}
