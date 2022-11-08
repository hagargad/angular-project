import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // FirstName:string ="";
  // LastName:string ="";
  // Email:string ="";
  // password:any;
  // ConfirmPass:any;
  // signUp(){
  //   if(this.FirstName == ""){
  //     console.log("please enter your name");
  //   }else if(this.LastName == ""){
  //     console.log("please enter your lname");
  //   }else if(this.Email == ""){
  //     console.log("please enter your email");
  //   }
  // }
  UserRegisterValidation = new FormGroup({
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.minLength(11)),
    Email : new FormControl('',Validators.email),
    re_email :new FormControl('',Validators.email),
    Password : new FormControl('',Validators.minLength(8)),
    ConfirmPass :new FormControl('',Validators.minLength(8))
  })

  get FnameValid(){
    return this.UserRegisterValidation.controls.FirstName.valid;
  }

  get LnameValid(){
    return this.UserRegisterValidation.controls.LastName.valid;
  }

  get emailValid(){
    return this.UserRegisterValidation.controls.Email.valid;
  }

  get PassValid(){
    return this.UserRegisterValidation.controls.Password.valid;
  }

  get confirmValid(){
    return this.UserRegisterValidation.controls.ConfirmPass.valid;
  }

  data(){
    console.log(this.UserRegisterValidation);
  }
}
