import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllproductsService {
  constructor(private httpClient:HttpClient) {}

private Base_URL = environment.baseApi;

  getAllProducts() {
    return this.httpClient.get(this.Base_URL);
  }
  getProductsByID(id:number) {
    return this.httpClient.get(`${this.Base_URL}/${id}`);
  }

  //update the title
  AddProduct(newdata: any) {
    return this.httpClient.post(this.Base_URL, newdata);
  }

  //update the body
  updateProduct(id: number, updatedData: any) {
    return this.httpClient.put(`${this.Base_URL}/${id}`, updatedData);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.Base_URL}/${id}`);
  }



}
