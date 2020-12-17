import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AcRepairComponent } from './Services/ac-repair/ac-repair.component';
import { BatteryComponent } from './Services/battery/battery.component';
import { CleaningDetailingComponent } from './Services/cleaning-detailing/cleaning-detailing.component';
import { CustomRepairComponent } from './Services/custom-repair/custom-repair.component';
import { DentingPaintingComponent } from './Services/denting-painting/denting-painting.component';
import { InsuranceServicesComponent } from './Services/insurance-services/insurance-services.component';
import { ScheduleServicesComponent } from './Services/schedule-services/schedule-services.component';
import { TyresWheelsCareComponent } from './Services/tyres-wheels-care/tyres-wheels-care.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
  { path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'customRepair', canActivate: [AuthGuard], component: CustomRepairComponent},
  { path: 'acRepair', canActivate: [AuthGuard], component: AcRepairComponent},
  { path: 'battery', canActivate: [AuthGuard], component: BatteryComponent},
  { path: 'cleaningDetailing', canActivate: [AuthGuard], component: CleaningDetailingComponent},
  { path: 'dentingPainting', canActivate: [AuthGuard], component: DentingPaintingComponent},
  { path: 'insuranceServices', canActivate: [AuthGuard], component: InsuranceServicesComponent},
  { path: 'scheduleService',canActivate: [AuthGuard],  component: ScheduleServicesComponent},
  { path: 'tyreWheel', canActivate: [AuthGuard], component: TyresWheelsCareComponent},
  {path:'**' , redirectTo:'dashboard'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
