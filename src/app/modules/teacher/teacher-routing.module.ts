import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentEditComponent } from './components/students/student-edit/student-edit.component';

const routes: Routes = [
  {path: '', component: TeacherDashboardComponent, children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'lessons', component: LessonsComponent},
    {path:'tasks', component:TasksComponent},
    {path:'students', component: StudentsComponent},
    {path:'students/edit',component: StudentEditComponent},
    {path:'', redirectTo:'/teacher/dashboard', pathMatch:'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
