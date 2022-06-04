import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ViewComponent } from './Components/view/view.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = 
[
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: RegisterComponent
  },
  {
    path: "", component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: "view", component: ViewComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
