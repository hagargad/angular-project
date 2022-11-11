import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  myContactFormValidation=new FormGroup({
    Fname:new FormControl("Amed",Validators.required),
    Lname:new FormControl("Ëslma",[Validators.minLength(3),Validators.maxLength(10)])

  })
}
