import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private h:HttpClient) { }


  baseurl="http://127.0.0.1:8000/api/contacts"

  adddat(body:any){
    return this.h.post(this.baseurl,body)
  }
}
