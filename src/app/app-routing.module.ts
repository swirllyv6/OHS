import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'customRepair', component: CustomRepairComponent},
  { path: 'acRepair', component: AcRepairComponent},
  { path: 'battery', component: BatteryComponent},
  { path: 'cleaningDetailing', component: CleaningDetailingComponent},
  { path: 'dentingPainting', component: DentingPaintingComponent},
  { path: 'insuranceServices', component: InsuranceServicesComponent},
  { path: 'scheduleService', component: ScheduleServicesComponent},
  { path: 'tyreWheel', component: TyresWheelsCareComponent},
  {path:'**' , redirectTo:'dashboard'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
