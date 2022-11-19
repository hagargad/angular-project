import { Component, OnInit } from "@angular/core";
import { AboutService } from "../../about/about.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AbouAdminModalComponent } from "src/app/abou-admin-modal/abou-admin-modal.component";

@Component({
  selector: "app-admin-about",
  templateUrl: "./admin-about.component.html",
  styleUrls: ["./admin-about.component.css"],
})
export class AdminAboutComponent implements OnInit {
  modalRef: MdbModalRef<AbouAdminModalComponent> | null = null;
  constructor(private myservice: AboutService,public modalService: MdbModalService) {}
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

  }

  deleteData(id: any) {
    this.myservice.deleteData(id).subscribe();
  }
  updateData(id: any, dataedit: any) {
    this.myservice.updateData(id, dataedit).subscribe();
  }

  openModalabout() {
    this.modalRef = this.modalService.open(AbouAdminModalComponent)
  }
}
