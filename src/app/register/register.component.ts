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
  get emailValue(){
    return this.UserRegisterValidation.controls.Email.value;
  }

  get PassValid(){
    return this.UserRegisterValidation.controls.Password.valid;
  }

  get confirmValid(){
    return this.UserRegisterValidation.controls.ConfirmPass.valid;
  }

  users:any;
  data(){
  // console.log(this.UserRegisterValidation.value);
  // let newUser = this.regUser.addUsers(this.UserRegisterValidation.value).subscribe();

  // let that = this;
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
