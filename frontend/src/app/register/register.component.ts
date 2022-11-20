import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regUser: ProjectService) { }

  ngOnInit(): void {
    // that = this;
    // console.log(this.regUser);
  }

  UserRegisterValidation = new FormGroup({
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    phoneNumber : new FormControl('',Validators.minLength(11)),
    gender: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    Email : new FormControl('',Validators.email),
    re_email :new FormControl('',Validators.email),
    Password : new FormControl('',Validators.minLength(8)),
    ConfirmPass :new FormControl('',Validators.minLength(8))
  })

  get FnameValid(){
    return this.UserRegisterValidation.get('FirstName');
  }

  get LnameValid(){
    return this.UserRegisterValidation.get('LastName');
  }

  get emailValid(){
    return this.UserRegisterValidation.get('Email');
  }
  get emailValue(){
    return this.UserRegisterValidation.controls.Email.value;
  }
  get reEmail(){
    return this.UserRegisterValidation.get('re_email');
  }
  get PassValid(){
    return this.UserRegisterValidation.get('Password');
  }

  get confirmValid(){
    return this.UserRegisterValidation.get('ConfirmPass');
  }

  users:any;
  data(){
  // console.log(this.UserRegisterValidation.value);
  let newUser = this.regUser.addUsers(this.UserRegisterValidation.value).subscribe();
    console.log(newUser);
  let that = this;
  // this.regUser.getUsers().subscribe({
  //   next(data){
  //     that.users = data
  //     }
  //   });
    // console.log(this.users);
    // for(let x of this.users){
    //   console.log(x);
    // }
  }
}
