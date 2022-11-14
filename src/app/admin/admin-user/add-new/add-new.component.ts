import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styles: [
  ]
})
export class AddNewComponent implements OnInit {

  constructor(private ServerService:UserDataService) { }

  ngOnInit(): void {
  }


  formDeltailsValid=new FormGroup({
    name:new FormControl("yourname" ,[Validators.required,Validators.maxLength(15)]),
    username:new FormControl("yourUsername" ,[Validators.required,Validators.maxLength(20)]),
    email:new FormControl("YourEmail",[Validators.required,Validators.email]),
    gender:new FormControl("yourGender",[Validators.required]),
    suite:new FormControl('suite',Validators.required),
    company:new FormControl("YourCompany",Validators.required),
    street:new FormControl('YourStreet',Validators.required),
    city:new FormControl('city',Validators.required),
    zipcode:new FormControl(2,[Validators.required,Validators.maxLength(4)]),
    phonenumber:new FormControl(499,[Validators.maxLength(11),Validators.required]),
    country:new FormControl("Egypt",Validators.required)
  })

  get Data(){
    return  this.formDeltailsValid.value
  }

  addNew(){
    this.ServerService.AddNew(this.Data).subscribe()
    console.log(this.Data)
  }
}
