import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 userData : {name:string, mobile:number , address:string , email:string}[] = [];

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.userData = this.profileService.userData;
  }

}
