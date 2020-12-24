import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../service/services.service';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  serviceId:any;
  garageId:any;
  selectedServices:any = []
  isLoading: boolean = true
  constructor(public activateRoute: ActivatedRoute,private _service: ServicesService) { }

  ngOnInit(): void {

    this.serviceId = this.activateRoute.snapshot.paramMap.get('serviceId')
    this.garageId = this.activateRoute.snapshot.paramMap.get('garageId')
    this.activateRoute.params.subscribe(() => {
      var data = this._service.getServiceByID(this.serviceId, this.garageId)
      this.selectedServices = [data]
      setTimeout(() => {
        this.isLoading = false
      }, 3000);
    });

    
  }

}
