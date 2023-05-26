import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StudentsComponent } from './components/students/students.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentEditComponent } from './components/students/student-edit/student-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddLessonComponent } from './components/lessons/add-lesson/add-lesson.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { StudentAddComponent } from './components/students/student-add/student-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TasksComponent,
    StudentsComponent,
    LessonsComponent,
    DashboardComponent,
    HeaderComponent,
    StudentEditComponent,
    AddLessonComponent,
    AddTaskComponent,
    ReviewsComponent,
    StudentAddComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    NgbCollapseModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NgbCollapseModule],
  exports: [TasksComponent],
})
export class TeacherModule {}
