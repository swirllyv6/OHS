import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServicesService } from '../service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDialogComponent } from '../services/service-dialog/service-dialog.component';
import { Location } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DateTimeComponent } from './date-time/date-time.component';

interface serviceForm {
  title:string , price:number , description:string , garage:string
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  serviceId:any;
  garageId:any;
  selectedServices:any = []
  panelOpenState = false;

  constructor(private _bottomSheet: MatBottomSheet, public _location: Location, private _service: ServicesService, public activateRoute: ActivatedRoute, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '1000px',
      data: {
        garageId: this.garageId
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
     
          this.selectedServices.push(...result);
    }
     
    );
  }

  // Bottom Sheet for Date and Time

  selectDateTime(): void {
    this._bottomSheet.open(DateTimeComponent);
  }

  deleteService(index:number){
    this.selectedServices.splice(index , 1);
    if(this.selectedServices.length == 0)
      this._location.back()
  }

  ngOnInit(): void {
    this.serviceId = this.activateRoute.snapshot.paramMap.get('serviceId')
    this.garageId = this.activateRoute.snapshot.paramMap.get('garageId')
    var data = this._service.getServiceByID(this.serviceId, this.garageId)
    this.selectedServices = [data]
    
  }

}
