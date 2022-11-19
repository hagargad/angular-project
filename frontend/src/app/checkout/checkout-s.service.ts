import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutSService {

  constructor(private checkoutmodul: HttpClient) {

   }
   baseUrl= "http://localhost:3000/products";

   getallproduct (){
    return this.checkoutmodul.get(this.baseUrl);
   }
}
