import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private getUser: HttpClient) { }
  register_url = environment.register_url

  login_url = environment.login_url

  admin_url = environment.admin_url
  
  loginAdmin__url = environment.loginAdmin__url

  addUsers(newUser:any){
    return this.getUser.post(this.register_url,newUser);
  }

  checkUsers(data:any){
    return this.getUser.post(this.login_url,data);
    // console.log(data);
  }

  newAdmin(admin:any){
    return this.getUser.post(this.admin_url,admin);
  }

  checkAdmin(data:any){
    return this.getUser.post(this.loginAdmin__url,data);
  }

  // getUsers(){
  //   return this.getUser.get(this.Base_url);
  // }

}
