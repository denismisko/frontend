import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
   showSideNavbar = false;

  onSideNavbarToggled(showSideNavbar: boolean) {
    this.showSideNavbar = showSideNavbar;
  }

}
