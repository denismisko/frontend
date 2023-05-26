import { Component, OnInit } from '@angular/core';
import { TeacherDashboardService } from 'src/app/modules/shared/teacher-dashboard/teacher-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardInfo: any;

  constructor(private dashboardService: TeacherDashboardService) {}

  ngOnInit() {
    this.onGetDashboardInfo();
  }

  onGetDashboardInfo() {
     this.dashboardService.getDashoboardInformations().subscribe(
       (response) => {
         this.dashboardInfo = response;
       },
       (error) => {
         console.log(error);
       }
     );
  }
}
