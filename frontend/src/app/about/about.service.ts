import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn : 'root'
})
export class AboutService {


constructor(private myclient:HttpClient){}
private Base_URL = environment. baseApi;

//get the body
getData() {
  return this.myclient.get(this.Base_URL);
}

storeData(){

}
//update the title
updateTitle(id:number,updatedTitle:any){
  return this.myclient.put(`${this.Base_URL}/${id}`,updatedTitle);
}

//updatet the body
updateBody(id:number,updatedData:any){
  return this.myclient.put(`${this.Base_URL}/${id}`,updatedData);
}


}
