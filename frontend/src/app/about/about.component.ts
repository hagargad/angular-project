import { Component, OnInit, Output, Input } from "@angular/core";
import { AboutService } from "./about.service";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private aboutservice: AboutService) {}
  title: any;
  desc: any;

  ngOnInit(): void {
    let that = this;
    this.aboutservice.getData().subscribe({
      next(data: any) {
        // that.title = data.data[0].title;
        // that.desc = data.data[0].body;
        that.title=data[0].title;
        that.desc=data[0].body;
      },
      error(err: any) {
        console.log(err);
      },
    });
  }
}
