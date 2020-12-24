import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicesService } from 'src/app/service/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.css']
})
export class ServiceDialogComponent implements OnInit {
  sendArr: any = [];
  isLoading: boolean = true
  services: any[] = []

  constructor(public activateRoute: ActivatedRoute , private _service: ServicesService, public dialogRef: MatDialogRef<ServiceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(() => {
      var data = this._service.getServicesByGarageId(this.data.garageId)
    this.services.push(...data)
      setTimeout(() => {
        this.isLoading = false
      }, 2000);
    });
  }

  close(): void {
    this.dialogRef.close();
  }



  onChange(i: number, event: any) {
    if (event.checked) {
      this.sendArr.push(this.services[i]);
    } else {
      this.sendArr.splice(i, 1);
    }
  }

  add(): void {
    this.dialogRef.close(this.sendArr);
  }


}
