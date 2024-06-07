import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  contactMode = [{
    moc : 'Email',
    id : 1
  },
  {
    moc : 'phone',
    id : 2
  }
]

@ViewChild('signUpForm') signUpForm !: NgForm

userInfo = {
  "userDetails" : {
    "username" : 'rupesh',
    "email" : 'rd7@gmail.com'
  },
  "secreteQuestion" : "favourateBook",
  "answer" : "The wings of fire",
  "isSubscribed" : true,
  "contactMode" :"Email"
  
}
  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(signUpForm : NgForm){
   if(signUpForm.valid){
    // console.log(signUpForm)
    console.log(signUpForm.value)
    signUpForm.resetForm()
   }
  }
  patchValue(){
    this.signUpForm.form.patchValue(this.userInfo)
  }

}
