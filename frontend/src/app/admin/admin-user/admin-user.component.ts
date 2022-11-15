import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styles: [
  ]
})
export class AdminUserComponent implements OnInit {

  constructor(private UserService:UserDataService ,private Route:ActivatedRoute ) { }
 users:any
 
  ngOnInit(): void {
   
    let that=this
    this.UserService.GetAllUser().subscribe({
      next(data){
        that.users=data
      }
    })
    
  }

  delete(id:number){
  this.UserService.deleteUser(id).subscribe()
  }
  /*Edit(id:number){
    this.UserService.Updaten(id).subscribe()
  }
  */
 

}
