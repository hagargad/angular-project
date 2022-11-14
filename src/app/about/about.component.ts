import { Component, OnInit,Output } from '@angular/core';
import { AboutService } from './about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private myservice: AboutService) { }
  title:any;
  data:any;
  ngOnInit(): void {
    //fetching
    let that = this;
    this.myservice.getData().subscribe(
      {
      next(title: any) {
        that.title = title;

      },
      error(err: any) {
        console.log(err);
      },
    });
  }



}
