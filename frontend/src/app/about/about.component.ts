import { Component, OnInit, Output } from "@angular/core";
import { AboutService } from "./about.service";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private aboutservice: AboutService) {}
  title: any;
  body: any;
  ngOnInit(): void {

    let that = this;
    this.aboutservice.getData().subscribe({
      next(title: any) {
        that.title = title;
        // that.body=body;

      },
      error(err: any) {
        console.log(err);
      },
    });
  }
}