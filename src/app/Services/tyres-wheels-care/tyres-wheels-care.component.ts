import { Component, OnInit } from '@angular/core';
import { TyresWheelsCareService } from '../tyres-wheels-care.service';

@Component({
  selector: 'app-tyres-wheels-care',
  templateUrl: './tyres-wheels-care.component.html',
  styleUrls: ['./tyres-wheels-care.component.css']
})
export class TyresWheelsCareComponent implements OnInit {

  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private tyreService:TyresWheelsCareService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.tyreService.serviceData;
  }

}
