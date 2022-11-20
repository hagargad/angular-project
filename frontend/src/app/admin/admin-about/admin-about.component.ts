import { Component, OnInit, Input, Output } from "@angular/core";
import { AboutService } from "../../about/about.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-admin-about",
  templateUrl: "./admin-about.component.html",
  styleUrls: ["./admin-about.component.css"],
})
export class AdminAboutComponent implements OnInit {
  constructor(private myservice: AboutService) {}
  title: any;
  body: any;
  id: any;

  ngOnInit(): void {
    //fetching
    let that = this;

    this.myservice.getData().subscribe({
      next(data: any) {
        that.id = data[0].id;
        that.title = data[0].title;
        that.body = data[0].body;
      },
    });
    this.deleteData, this.updateData, this.storeData;
  }
  aboutform = new FormGroup({
    titleinput: new FormControl(""),
    bodyinput: new FormControl(""),
    id:new FormControl("1"),
  });

  deleteData(id: any) {
    this.myservice.deleteData(id).subscribe();
  }

  updateData() {
    this.myservice.updateData(this.aboutform.value,this.aboutform.value.id).subscribe();
  }
  storeData(newdata: any) {
    let that = this;
    this.myservice.storeData(newdata).subscribe({
      next(newdata: any) {
        that.id = newdata[0].id;
        that.title = newdata[0].title;
        that.body = newdata[0].body;
      },
    });
  }
}
