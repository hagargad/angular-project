import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn : 'root'
})
export class ProductsService {


constructor(private myclient:HttpClient){}
private Base_URL = " http://localhost:3000/products";
getProducts() {
  return this.myclient.get(this.Base_URL);
}

getProductsByID(id:number) {
  return this.myclient.get(`${this.Base_URL}/${id}`);
}

addNewProduct(newProduct :any){
  return this.myclient.post(this.Base_URL,newProduct);
}
updateProduct(id:number,updatedProduct:any){
  return this.myclient.put(`${this.Base_URL}/${id}`,updatedProduct);
}

//delete
 //batch


}
