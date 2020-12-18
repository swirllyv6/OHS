import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  serviceData = [
    {
      title:"Service 1",
      price:999,
      description:"This is service 1",
      garage:"Garage 1"
    },
    {
      title:"Service 2",
      price:999,
      description:"This is service 2",
      garage:"Garage 2"
    }
  ];

  addNewService(title:string , price:number , description:string , garage : string){
    this.serviceData.push({
      title:title,
      price:price,
      description:description,
      garage:garage
    });

  }
  constructor() { }
}
