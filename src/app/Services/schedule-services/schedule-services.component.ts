import { Component, OnInit } from '@angular/core';
import { ScheduleServicesService } from '../schedule-services.service';

@Component({
  selector: 'app-schedule-services',
  templateUrl: './schedule-services.component.html',
  styleUrls: ['./schedule-services.component.css']
})
export class ScheduleServicesComponent implements OnInit {

  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private scheduleService:ScheduleServicesService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.scheduleService.serviceData;
  }

}
