import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(public myprofileData:HttpClient) { }

  baseURL= environment.baseApi
  
  getAllData(){
    return this.myprofileData.get(this.baseURL)
  }
  getOneUser(id:number){
    return this.myprofileData.get(`${this.baseURL}/${id}`)
  }
}
