import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'student',
      canActivate: [AuthGuard],
      loadChildren: () => import('./modules/student/student.module').then((m) => m.StudentModule)},
  {path:'teacher', 
      canActivate: [AuthGuard],
      loadChildren:()=> import('./modules/teacher/teacher.module').then((m) => m.TeacherModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
