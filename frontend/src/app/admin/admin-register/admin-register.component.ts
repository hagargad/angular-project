import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private newadmin: ProjectService) { }

  ngOnInit(): void {
  }
  registerAdminValidation = new FormGroup({
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    E_mail : new FormControl('',Validators.email),
    phoneNumber: new FormControl('',Validators.maxLength(11)),
    Password : new FormControl('',Validators.minLength(8)),
    ConfirmPass :new FormControl('',Validators.minLength(8))
  })

  get FnameValid(){
    return this.registerAdminValidation.get('FirstName');
  }

  get LnameValid(){
    return this.registerAdminValidation.get('LastName');
  }

  get emailValid(){
    return this.registerAdminValidation.get('E_mail');
  }

  get PassValid(){
    return this.registerAdminValidation.get('Password');
  }

  get confirmValid(){
    return this.registerAdminValidation.get('ConfirmPass');
  }

  data(){
    // console.log(this.registerAdminValidation.value);
    this.newadmin.newAdmin(this.registerAdminValidation.value).subscribe();
  }

}
