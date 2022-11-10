import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminRegisterComponent } from './adminpanel/admin-register/admin-register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './adminpanel/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin-register", component:AdminRegisterComponent},
  {path:"admin-login", component: AdminLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
