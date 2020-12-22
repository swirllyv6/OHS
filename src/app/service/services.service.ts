import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  serviceData = [
    {
      id: 12,
      garageID: 21,
      title:"Service 1",
      price:999,
      description:"This is service 1",
      garage:"Garage 1"
    },
    {
      id: 13,
      garageID: 21,
      title:"Service 1",
      price:999,
      description:"This is service 1",
      garage:"Garage 1"
    },
    {
      id: 34,
      garageID: 43,
      title:"Service 2",
      price:999,
      description:"This is service 2",
      garage:"Garage 2"
    },
    {
      id: 56,
      garageID: 65,
      title:"Service 3",
      price:999,
      description:"This is service 3",
      garage:"Garage 3"
    },
    {
      id: 78,
      garageID: 87,
      title:"Service 4",
      price:999,
      description:"This is service 4",
      garage:"Garage 4"
    }
  ];

  constructor() { }

  getServices(forService:any, location:{}){
    console.log(forService,location)
    return this.serviceData
  }

  getServiceByID(serviceID: string | null, garageID: string | null){
    return (this.search(serviceID, garageID, this.serviceData))
  }

  getServicesByGarageId(garageId: number){
    var array = []
    for (var i=0; i < this.serviceData.length; i++) 
        if (this.serviceData[i].garageID == garageId) 
            array.push(this.serviceData[i])
    return array
  }

  // Test function used for return of service data from dummy services
  search(nameKey1: any, nameKey2: any, myArray: string | any[]){  
    
    for (var i=0; i < myArray.length; i++) 
        if (myArray[i].id == nameKey1 && myArray[i].garageID == nameKey2 ) 
            return myArray[i]
  }
}
