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
  
  selectedServices = [
    {
      name:"Service1",
      price:999,
      description:"this is service 1",
      garage:"Garage1",
      serviceImg:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg" 
    },
    {
      name:"Service2",
      price:999,
      description:"this is service 2",
      garage:"Garage2",
      serviceImg:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg" 
    },
    {
      name:"Service3",
      price:999,
      description:"this is service 3",
      garage:"Garage3",
      serviceImg:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg" 
    }
  ]

  dateTime = [
    {
      date: 16,
      day: 'Mon',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 17,
      day: 'Tue',
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
      day: 'Thus',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 20,
      day: 'Fri',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    }
  ];
  
 

 
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDailogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
          this.selectedServices.push(...result);
    }
     
    );
  }

  deleteService(index:number){
    this.selectedServices.splice(index , 1);
  }

  ngOnInit(): void {
  }

}
