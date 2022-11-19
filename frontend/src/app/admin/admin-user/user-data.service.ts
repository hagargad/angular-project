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

  deleteUser(id:number){
    return this.DataFromAPI.delete(`${this.baseUrl}/${id}`)
  }
  Updaten(id:number,data:any){
    return this.DataFromAPI.put(`${this.baseUrl}/${id}`,data)
  }
  AddNew(data:any){
    return this.DataFromAPI.post(this.baseUrl,data)
  }
  getOnaeUser(id:number){
    return this.DataFromAPI.get(`${this.baseUrl}/${id}`)
  }
}
