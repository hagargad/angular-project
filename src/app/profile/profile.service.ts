import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(public myprofileData:HttpClient) { }

  baseURL="http://localhost:3000/users"
  
  getAllData(){
    return this.myprofileData.get(this.baseURL)
  }
  getOneUser(id:number){
    return this.myprofileData.get(`${this.baseURL}/${id}`)
  }
}
