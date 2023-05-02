import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeacherModule } from '../teacher/teacher.module';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FontAwesomeModule,
    TeacherModule
  ]
})
export class StudentModule { }
