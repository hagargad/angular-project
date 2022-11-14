import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styles: [
  ]
})
export class UpdateFormComponent implements OnInit {

  constructor(private Route:ActivatedRoute,private serv:UserDataService) { }
  DataOne:any=0
  ngOnInit(): void {
  let that=this;
  this.serv.getOnaeUser(Object.values(this.Route.snapshot.params)[0]).subscribe(
  {
    next(data){
      that.DataOne=data
      console.log(that.DataOne)
    }
  }
 );
 
  }


  formDeltailsValid=new FormGroup({
    name:new FormControl("yourname" ,[Validators.required,Validators.maxLength(15)]),
    username:new FormControl("yourUsername" ,[Validators.required,Validators.maxLength(20)]),
    email:new FormControl("YourEmail",[Validators.required,Validators.email]),
    gender:new FormControl("yourGender",[Validators.required]),
     
    suite:new FormControl('suite',Validators.required),
    city:new FormControl('city',Validators.required),
    zipcode:new FormControl(2,[Validators.required,Validators.maxLength(4)]),
    phonenumber:new FormControl(499,[Validators.maxLength(11),Validators.required]),
    country:new FormControl("Egypt",Validators.required)
  })

  get namee(){
    return this.formDeltailsValid.value
  }

  updateNow()
  {
    this.serv.Updaten(Object.values(this.Route.snapshot.params)[0],this.formDeltailsValid.value)
    console.log(Object.values(this.Route.snapshot.params)[0])
    console.log(this.formDeltailsValid.value)
  }



}
