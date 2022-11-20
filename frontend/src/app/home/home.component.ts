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
 i:number=1;

  ngOnInit(): void {
    let that=this
    this.homes.getallProuduct().subscribe({
      next(data:any){
        that.home=data

      }
    })

    setInterval(()=>{if (this.i == 13) {
      this.i = 1;
    } else {
      this.i++
    }} ,5000);

   

  }
 showSlide(i:number){
    this.i=i;
    }
}
