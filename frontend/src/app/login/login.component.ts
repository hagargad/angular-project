import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { json } from 'stream/consumers';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:ProjectService) { }

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
  // usersData:any;
  // message:any;
  login(){
    this.user.checkUsers(this.Userloginvalidation.value).subscribe();

    // console.log(this.Userloginvalidation.value.useremail);
    // let that = this;
    // let message;
    // let fetch= this.user.getUsers().subscribe({
    //   next(data){
    //     that.usersData = data;
    //     // console.log(data)
    //   }
    // });
    // if(this.Userloginvalidation.value.useremail ){

    // }
    // console.log(this.usersData);
    //    for(let i = 0; i>= 10 ; i++){
    //       let u = "mm"
    //       if(that.Userloginvalidation.value.useremail == that.usersData[i].email){
    //         that.message = "successfully";
    //         console.log("jssssss");
    //         // let url = "/register"
    //         // that.message = url;

    //       }else{
    //         that.message = "failed";
    //         console.log("555555555");

    //       }
    //       // that.message = "shhs";
    //       // console.log(that.message);
    //        console.log(i);

    //     }
  }

}
