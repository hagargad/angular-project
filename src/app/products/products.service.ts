import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn : 'root'
})
export class ProductsService {


constructor(private client:HttpClient){}
private Base_URL = " https://fakestoreapi.com/products";
getAllProducts() {
  return this.client.get(this.Base_URL);
}

getProductsByID(id:number) {
  return this.client.get(`${this.Base_URL}/${id}`);
}

addNewProduct(newProduct :any){
  return this.client.post(this.Base_URL,newProduct);
}
updateProduct(id:number,updatedProduct:any){
  return this.client.put(`${this.Base_URL}/${id}`,updatedProduct);
}

//delete
 //batch


}
