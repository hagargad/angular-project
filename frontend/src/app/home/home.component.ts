import { Component, OnInit } from '@angular/core';
import { HomeSService } from './home-s.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homes:HomeSService) { }
 home:any
  ngOnInit(): void {
    let that=this
    this.homes.getallProuduct().subscribe({
      next(data:any){
        that.home=data

      }
    })
  }

}
