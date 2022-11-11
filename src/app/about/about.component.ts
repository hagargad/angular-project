import { Component,OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { AboutService } from './about.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: any;
  body :any;

  constructor(private httpClient: HttpClient) { }
  // title:any;
  // data:any;
  // ngOnInit(): void {
  //   //fetching
  //   let that = this;
  //   this.myservice.getData().subscribe(
  //     {
  //     next(title: any) {
  //       that.title = title;

  //     },
  //     error(err: any) {
  //       console.log(err);
  //     },
  //   });
  // }
  ngOnInit(): void {
    this.httpClient
      .get<any>('assets/db.json')
      .subscribe(
        (data) => (this.title = data,
        this.body =data));
  }



}
