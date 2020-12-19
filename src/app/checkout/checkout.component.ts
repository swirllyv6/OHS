import { Component, OnInit } from '@angular/core';
import { ServiceDailogComponent } from '../service-dailog/service-dailog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
interface serviceForm {
  title:string , price:number , description:string , garage:string
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  dateTime = [
    {
      date: 16,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 17,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 18,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 19,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 20,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    }
  ];
  
  otherService = [{}];

 
  constructor(public dialog: MatDialog) { console.log(this.otherService);}
  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDailogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
          this.otherService = result;
    }
     
    );
  }
  ngOnInit(): void {
  }

}
