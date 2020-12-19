import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name:"Service1",
  price:999,
  garage:"Garage1"
}
@Component({
  selector: 'app-service-dailog',
  templateUrl: './service-dailog.component.html',
  styleUrls: ['./service-dailog.component.css']
})
export class ServiceDailogComponent implements OnInit {
  sendArr: {name:string,
  price:number,
  garage:string,
  description:string,
  serviceImg:string}[] = [];

  otherServices = [{
    name:"Service1",
    price:999,
    garage:"Garage1",
    description:"this is service 1",
    serviceImg:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg"
  },{
    name:"Service2",
    price:888,
    garage:"Garage2",
    description:"this is service 2",
    serviceImg:"https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg"
  }
]
   
  constructor( public dialogRef: MatDialogRef<ServiceDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

      

     }

  ngOnInit(): void {
    
  }

  close(): void {
    this.dialogRef.close();
  }

 
 
  onChange(i:number , event:any){
   if(event.checked){
      this.sendArr.push(this.otherServices[i]);
   }else{
    this.sendArr.splice(i , 1);
   }
  }

  add(): void {
    this.dialogRef.close(this.sendArr);
  }

  
}
