import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styles: [
  ]
})
export class AdminUserComponent implements OnInit {

  constructor(private UserService:UserDataService) { }
 users:any
 
  ngOnInit(): void {
   
    let that=this
    this.UserService.GetAllUser().subscribe({
      next(data){
        that.users=data
      }
    })
    
  }

 

}
