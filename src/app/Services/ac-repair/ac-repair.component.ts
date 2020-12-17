import { Component, OnInit } from '@angular/core';
import { AcRepairService } from '../ac-repair.service';

@Component({
  selector: 'app-ac-repair',
  templateUrl: './ac-repair.component.html',
  styleUrls: ['./ac-repair.component.css'],
  providers:[AcRepairService]
})
export class AcRepairComponent implements OnInit {
  serviceData: {title:string , price:number , description:string , garage:string}[] = [];

  constructor(private acRepair:AcRepairService) {
   }
 
  ngOnInit(): void {
    this.serviceData = this.acRepair.serviceData;
  }

}
