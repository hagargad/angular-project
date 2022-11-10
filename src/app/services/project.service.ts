import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private getUser: HttpClient) { }
  Base_url = "http://localhost:3000/users";

  addUsers(newUser:any){
    return this.getUser.post(this.Base_url,newUser);
  }

  getUsers(){
    return this.getUser.get(this.Base_url);
  }

}
