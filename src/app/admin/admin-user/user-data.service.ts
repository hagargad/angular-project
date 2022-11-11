import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private DataFromAPI:HttpClient) {
  }
baseUrl="http://localhost:3000/users";
  GetAllUser(){
    return this.DataFromAPI.get(this.baseUrl)
  }
  
}
