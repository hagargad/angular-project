import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSService {

  constructor(private homemodule:HttpClient) { }

  baseUrl="http://127.0.0.1:8000/api/home"

  getallProuduct(){
   return this.homemodule.get(this.baseUrl)
  }
}
