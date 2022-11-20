import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sr:ContactService) { }
  
  ngOnInit(): void {
  }
  
  myContactFormValidation=new FormGroup({
    Fname:new FormControl("",[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    Lname:new FormControl("",[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    Email:new FormControl("",[Validators.required,Validators.email]),
    Mobile:new FormControl(0,[Validators.minLength(11),Validators.maxLength(11),Validators.required]),
    Massage:new FormControl("",[Validators.maxLength(200),Validators.required]),
    Auth:new FormControl(1,[Validators.required])
  })
  get nameValid(){
    return this.myContactFormValidation.controls.Fname.value 
  }

  cslicc=true
  clicc(){
    this.cslicc = !this.cslicc
  }


  successMsg="Suceessful Completed Will be contact with you soon "
  failedMssage="please fill success Data"
  tmeSendMail(){
    let successMsg
    if (this.myContactFormValidation.valid){
        successMsg = this.successMsg;
      }
    else{
      successMsg = this.failedMssage;
    }
   
      return successMsg
      
      
}

sendData(){
  console.log(this.myContactFormValidation.value)
  this.sr.adddat(this.myContactFormValidation.value).subscribe()
}
}