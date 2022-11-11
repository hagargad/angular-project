import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class AboutService {


constructor(private myclient:HttpClient){}
private Base_URL = " http://localhost:3000/about";

//get the body
getData() {
  return this.myclient.get(this.Base_URL);
}

//update the title
updateTitle(id:number,updatedTitle:any){
  return this.myclient.put(`${this.Base_URL}/${id}`,updatedTitle);
}

//update the body
updateData(id:number,updatedData:any){
  return this.myclient.put(`${this.Base_URL}/${id}`,updatedData);
}

deleteTitle(title:any){
  return this.myclient.delete(`${this.Base_URL}`,title);
}

deleteBody(body:any){
  return this.myclient.delete(`${this.Base_URL}`,body);
}

}
