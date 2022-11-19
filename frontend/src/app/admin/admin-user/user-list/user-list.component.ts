import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  users:any
  constructor(private UserService:UserDataService ,private Route:ActivatedRoute) { }

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
    update(){
      this.UserService.Updaten
    }
    
}
