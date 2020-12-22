import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _auth: AuthService, private _router: Router) { }

  
  ngOnInit(): void {
  }
  
  login(){
    this._auth.login()? this._router.navigate(['/dashboard']): ''
  }
}
