import { Component, OnInit } from '@angular/core';
import { CustomRepairService } from '../custom-repair.service';

@Component({
  selector: 'app-custom-repair',
  templateUrl: './custom-repair.component.html',
  styleUrls: ['./custom-repair.component.css'],
  providers:[CustomRepairService]
})
export class CustomRepairComponent implements OnInit {

  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private customRepair:CustomRepairService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.customRepair.serviceData;
  }

}
