import { Component, OnInit } from '@angular/core';
import { CleaningDetailingService } from '../cleaning-detailing.service';

@Component({
  selector: 'app-cleaning-detailing',
  templateUrl: './cleaning-detailing.component.html',
  styleUrls: ['./cleaning-detailing.component.css'],
  providers:[CleaningDetailingService]
})
export class CleaningDetailingComponent implements OnInit {
  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private cleaningDetailing:CleaningDetailingService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.cleaningDetailing.serviceData;
  }

}
