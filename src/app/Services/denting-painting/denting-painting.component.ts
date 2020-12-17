import { Component, OnInit } from '@angular/core';
import { DentingPaintingService } from '../denting-painting.service';

@Component({
  selector: 'app-denting-painting',
  templateUrl: './denting-painting.component.html',
  styleUrls: ['./denting-painting.component.css']
})
export class DentingPaintingComponent implements OnInit {

  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private dentingService:DentingPaintingService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.dentingService.serviceData;
  }
}
