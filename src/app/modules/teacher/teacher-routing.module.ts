import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentEditComponent } from './components/students/student-edit/student-edit.component';
import { AddLessonComponent } from './components/lessons/add-lesson/add-lesson.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { StudentAddComponent } from './components/students/student-add/student-add.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'lessons', component: LessonsComponent },
      { path: 'lessons/add-lesson', component: AddLessonComponent },
      { path: 'tasks', component: TasksComponent },
      {
        path: 'teacher/tasks/:classTitle',
        component: TasksComponent,
      },
      { path: 'tasks/add-task', component: AddTaskComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'students/edit', component: StudentEditComponent },
      { path: 'students/add', component: StudentAddComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: '', redirectTo: '/teacher/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
