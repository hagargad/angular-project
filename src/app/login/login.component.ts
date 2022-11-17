import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public user:ProjectService) { }

  ngOnInit(): void {
    // this.user.getUserInfo
  }
  Userloginvalidation = new FormGroup({
    useremail : new FormControl('',Validators.email),
    userpassword : new FormControl('',Validators.minLength(8)),
  });

   get UseremailValid(){
    return this.Userloginvalidation.get('useremail');
  }
  get UserpassValid(){
    return this.Userloginvalidation.get('userpassword');
  }

  login(){
    console.log(this.Userloginvalidation);
  }

}
