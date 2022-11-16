import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

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
  getData(): Observable<About[]> {
    return this.http.get<About[]>(this.Base_URL + "/about");

  }
  // new HttpHeaderResponse({ headers: this.HttpHeaders })
  //Store Data
  storeData(): void {}

  //Delete Data
  delete() {}

  //update the title
  // updateTitle(id: number, updatedTitle: any) {
  //   return this.http.put(`${this.Base_URL}/${id}`, updatedTitle);
  // }

  //update the body
  // updateBody(id: number, updatedData: any) {
  //   return this.http.put(`${this.Base_URL}/${id}`, updatedData);
  // }
}
