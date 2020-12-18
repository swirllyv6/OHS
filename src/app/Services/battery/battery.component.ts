import { Component, OnInit } from '@angular/core';
import { BatteryService } from '../battery.service';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css'],
  providers:[BatteryService]
})
export class BatteryComponent implements OnInit {
 
  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private batteryService:BatteryService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.batteryService.serviceData;
  }

}
