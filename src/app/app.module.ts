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

import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { ServicesComponent } from './services/services.component';
import { ServiceHeaderComponent } from './services/service-header/service-header.component';


import { ServiceLoaderComponent } from './services/service-loader/service-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AllServicesComponent } from './services/all-services/all-services.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { ServiceDialogComponent } from "./services/service-dialog/service-dialog.component";
import { DateTimeComponent } from './checkout/date-time/date-time.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    ProfileComponent,
    ServiceHeaderComponent,
    ServicesComponent,
    ServiceLoaderComponent,
    AllServicesComponent,
    ServiceCardComponent,
    ServiceDialogComponent,
    DateTimeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    IvyCarouselModule,
    NgxSkeletonLoaderModule.forRoot()
  ],
  providers: [AuthService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
