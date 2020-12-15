import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images=[
    {
      path: 'https://i.pinimg.com/originals/10/52/ce/1052cedc818d44eb7d6084aebc9cd85d.jpg'
    },
    {
      path: 'https://i.pinimg.com/originals/51/9b/2b/519b2b6479d29e86d896c250a017fe86.jpg'
    },
    {
      path: 'https://freedesignfile.com/upload/2012/11/Concept-cars-2.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
