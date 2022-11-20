import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";


export interface About {
  id: Number;
  title: String;
  body: String;
}

@Injectable({
  providedIn: "root",
})
export class AboutService {
  private accessToken: any;
  private HttpHeaders: any;
  private Base_URL: string = environment.baseApi;

  constructor(private http: HttpClient) {}

// private Base_URL: any ='http://localhost:8000/api/about';

  //get the body
  getData() {
    return this.http.get<About[]>(this.Base_URL + "/about");
    // return this.http.get(this.Base_URL+'/about');
    // return this.http.get('http://localhost:8000/api/about');
  }
  //Store Data
  storeData(newdata: any) {
    return this.http.post(this.Base_URL + "/about", newdata);
  }

  //Delete Data
  deleteData(id: number) {
    return this.http.delete(`${this.Base_URL + "/about"}/${id}`);
  }

  //update Data
  updateData(updatedData: any,id:any) {

    return this.http.put(`${this.Base_URL + "/about"}/${id}`, updatedData);


  }


}
