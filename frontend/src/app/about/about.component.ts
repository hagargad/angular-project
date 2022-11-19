import { Component, OnInit, Output, Input } from "@angular/core";
import { AboutService } from "./about.service";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private aboutservice: AboutService) {}
  // title: any;
  // body: any;
  about:any
  ngOnInit(): void {
    let that = this;
    this.aboutservice.getData().subscribe({
      next(data: any) {
        that.about=data;
        // that.title = data.title;
        // that.body = data.body;
      },
      error(err: any) {
        console.log(err);
      },
    });
  }
}
