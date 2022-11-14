import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSService {

  constructor(private homemodule:HttpClient) { }

  baseUrl="http://localhost:3000/home"

  getallProuduct(){
   return this.homemodule.get(this.baseUrl)
  }
}
