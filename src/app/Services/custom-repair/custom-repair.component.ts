import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-repair',
  templateUrl: './custom-repair.component.html',
  styleUrls: ['./custom-repair.component.css']
})
export class CustomRepairComponent implements OnInit {

  serviceData1 = [
    {
      title:"Service 1",
      price:999,
      description:"This is service 1",
      garage:"Garage 1"
    }
  ];

  serviceData2 = [
    {
      title:"Service 2",
      price:999,
      description:"This is service 2",
      garage:"Garage 2"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
