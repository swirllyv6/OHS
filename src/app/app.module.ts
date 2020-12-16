import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomRepairComponent } from './Services/custom-repair/custom-repair.component';
import { AcRepairComponent } from './Services/ac-repair/ac-repair.component';
import { BatteryComponent } from './Services/battery/battery.component';
import { CleaningDetailingComponent } from './Services/cleaning-detailing/cleaning-detailing.component';
import { DentingPaintingComponent } from './Services/denting-painting/denting-painting.component';
import { InsuranceServicesComponent } from './Services/insurance-services/insurance-services.component';
import { ScheduleServicesComponent } from './Services/schedule-services/schedule-services.component';
import { TyresWheelsCareComponent } from './Services/tyres-wheels-care/tyres-wheels-care.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    CustomRepairComponent,
    AcRepairComponent,
    BatteryComponent,
    CleaningDetailingComponent,
    DentingPaintingComponent,
    InsuranceServicesComponent,
    ScheduleServicesComponent,
    TyresWheelsCareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
