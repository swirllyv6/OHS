import { Component, OnInit } from '@angular/core';
import { InsuranceServicesService } from '../insurance-services.service';

@Component({
  selector: 'app-insurance-services',
  templateUrl: './insurance-services.component.html',
  styleUrls: ['./insurance-services.component.css']
})
export class InsuranceServicesComponent implements OnInit {

  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private insuraceService:InsuranceServicesService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.insuraceService.serviceData;
  }

}
