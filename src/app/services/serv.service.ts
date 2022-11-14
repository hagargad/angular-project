import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(public myclient:HttpClient) { 
    
  }
  basUrl="https://fakestoreapi.com/users"
  
  getAllUsers(){
    return this.myclient.get(this.basUrl)
  }
  getUserbyID(id:number){
    return this.myclient.get(this.basUrl+"/"+id)
  }
}
