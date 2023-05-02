import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {path: '', component: AdminDashboardComponent , 
    children: [
      {path:'dashboard', component:DashboardComponent},
      {path:'about', component:AboutComponent},
      {path:'services', component: ServicesComponent},
      {path:'contact', component: ContactComponent},
      {path: '', redirectTo:'/admin/dashboard', pathMatch:'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
