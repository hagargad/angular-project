import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private h:HttpClient) { }


  baseurl="http://localhost:3000/Contact"

  adddat(body:any){
    return this.h.post(this.baseurl,body)
  }
}
