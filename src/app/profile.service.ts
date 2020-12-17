import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userData = [{
    name:"Kadir Sheikh",
    mobile:7972112804,
    address:"Ward No.1, Old Town, Butibori, Nagpur",
    email:"sheikhkadir02@gmail.com"
  }]
  constructor() { }
}
