import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  public signUpForm;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  onClick(){
    console.log(this.signUpForm);
  }

}
