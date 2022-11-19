import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-abou-admin-modal',
  templateUrl: './abou-admin-modal.component.html',
  styleUrls: ['./abou-admin-modal.component.css']
})
export class AbouAdminModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<AbouAdminModalComponent>) { }

  ngOnInit(): void {
  }

}
