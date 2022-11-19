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

  //get the body
  getData() {
    // return this.http.get<About[]>(this.Base_URL + "/about");
    return this.http.get(this.Base_URL+'/about');

  }
  //Store Data
  storeData(newdata: any) {
    return this.http.post(this.Base_URL, newdata);
  }

  //Delete Data
  deleteData(id: number) {
    return this.http.delete(`${this.Base_URL}/${id}`);
  }

  //update Data
  updateData(id: number, updatedTitle: any) {
    return this.http.put(`${this.Base_URL}/${id}`, updatedTitle);
  }


}
