import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {
paymentStatus:boolean = true;
isLoading:boolean = true
  constructor(public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(() => {
      setTimeout(() => {
        this.isLoading = false
      }, 3000);
    });
  }

}
