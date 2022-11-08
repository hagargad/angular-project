import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerAdminValidation = new FormGroup({
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    E_mail : new FormControl('',Validators.email),
    Password : new FormControl('',Validators.minLength(8)),
    ConfirmPass :new FormControl('',Validators.minLength(8))
  })

  get FnameValid(){
    return this.registerAdminValidation.controls.FirstName.valid;
  }

  get LnameValid(){
    return this.registerAdminValidation.controls.LastName.valid;
  }

  get emailValid(){
    return this.registerAdminValidation.controls.E_mail.valid;
  }

  get PassValid(){
    return this.registerAdminValidation.controls.Password.valid;
  }

  get confirmValid(){
    return this.registerAdminValidation.controls.ConfirmPass.valid;
  }

  data(){
    // console.log(this.registerAdminValidation);
  }

}
