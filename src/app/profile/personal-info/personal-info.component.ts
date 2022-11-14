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
selected="selected";
userID=0;
user:any;
users:any;
count:any[]=[];



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
        }
      })

      this.userInject.getAllData().subscribe(
        {
          next(data){
            that.users=data
          }
        }
      )
     
  }
 
  toggleCityInput(){
    for(let i=0 ;i<=this.users.length;i++){
      this.count.push(this.users[i].address.Country)
      //console.log(this.users[i].address)
    }
    
  }
  
  
}

//get data from object ts ?