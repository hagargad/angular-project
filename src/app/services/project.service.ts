import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private myUser:HttpClient) { }
  private Base_URL = "https://fakestoreapi.com/users";
  getUserInfo(){
    return this.myUser.get(this.Base_URL);
  }
}
