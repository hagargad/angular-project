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
  registerValidation = new FormGroup({
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    E_mail : new FormControl('',Validators.email),
    Password : new FormControl('',Validators.minLength(8)),
    ConfirmPass :new FormControl('',Validators.minLength(8))
  })

  get FnameValid(){
    return this.registerValidation.controls.FirstName.valid;
  }

  get LnameValid(){
    return this.registerValidation.controls.LastName.valid;
  }

  get emailValid(){
    return this.registerValidation.controls.E_mail.valid;
  }

  get PassValid(){
    return this.registerValidation.controls.Password.valid;
  }

  get confirmValid(){
    return this.registerValidation.controls.ConfirmPass.valid;
  }

  data(){
    console.log(this.registerValidation);
  }
}
