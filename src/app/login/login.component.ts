import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Userloginvalidation = new FormGroup({
    email : new FormControl('',Validators.email),
    password : new FormControl('',Validators.minLength(8)),
  })

  get UseremailValid(){
    return this.Userloginvalidation.controls.email.valid;
  }
  get UserpassValid(){
    return this.Userloginvalidation.controls.password.valid;
  }

  login(){
    // console.log(this.loginvalidation);
  }

}
