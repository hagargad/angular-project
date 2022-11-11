import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor( private http: HttpClient) {}

  // private Base_URL = " https://fakestoreapi.com/products";


  // getProductsByID(id:number) {
  //   return this.http.get(`${this.Base_URL}/${id}`);
  // }

  // addNewProduct(newProduct :any){
  //   return this.http.post(this.Base_URL,newProduct);
  // }
  // updateProduct(id:number,updatedProduct:any){
  //   return this.http.put(`${this.Base_URL}/${id}`,updatedProduct);
  // }

  //delete
  //batch
}
