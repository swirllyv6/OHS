import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name:"Service1",
  price:999,
  garageName:"Garage1"
}
@Component({
  selector: 'app-service-dailog',
  templateUrl: './service-dailog.component.html',
  styleUrls: ['./service-dailog.component.css']
})
export class ServiceDailogComponent implements OnInit {

  otherServices = [{
    name:"Service1",
    price:999,
    garageName:"Garage1",
    imgsrc:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg"
  },{
    name:"Service2",
    price:888,
    garageName:"Garage1",
    imgsrc:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg"
  }
]
   
  constructor( public dialogRef: MatDialogRef<ServiceDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.dialogRef.close([
      {
        title:"Service 1",
        price:999,
        description:"This is service 1",
        garage:"Garage 1"
      }
    ]);
  }
}
