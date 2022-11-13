import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../about/about.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { title } from 'process';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  constructor(private myservice:AboutService) { }
  title:any;
  data:any;
  ngOnInit(): void {
     //fetching
     let that = this;

     this.myservice.getData().subscribe({
       next(data:any){
         that.title=title;
         that.data=data;

       }

     })
  }

}
