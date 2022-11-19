import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../about/about.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { title } from 'process';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  constructor(private myservice:AboutService) { }
  title:any;
  body:any;
  ngOnInit(): void {
     //fetching
     let that = this;

     this.myservice.getData().subscribe({
       next(data:any){
         that.title=data.title;
         that.body=data.body;

       }

     })
  }

  deleteData(id: any) {
    this.myservice.deleteData(id).subscribe();
    console.log(id);
  }
 updateData(id: any, dataedit: any) {
    this.myservice.updateData(id, dataedit).subscribe();
  }

}
