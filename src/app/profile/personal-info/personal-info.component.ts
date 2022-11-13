import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styles: [
  ]
})
export class PersonalInfoComponent implements OnInit {
userID=0;
user:any;

  constructor(private userid:ActivatedRoute ,private userInject:ProfileService) { 
    this.userID=userid.snapshot.params["id"]
  }
   
  ngOnInit(): void { //fetching Api
    let that = this;
      this.userInject.getOneUser(this.userID).subscribe(
        {
        next(data){
         that.user=data
         //console.log(data[id])
        },
        error(err){
    
        }
      })
  }
  
}

//get data from object ts ?