import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { AllServicesComponent } from './services/all-services/all-services.component';

import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'checkout/:serviceId/:garageId', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'service', component: ServicesComponent, canActivate: [AuthGuard],
    children :[
      
      { path: 'service/:service', component: AllServicesComponent, canActivateChild: [AuthGuard]},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path:'**' , redirectTo:'dashboard'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
