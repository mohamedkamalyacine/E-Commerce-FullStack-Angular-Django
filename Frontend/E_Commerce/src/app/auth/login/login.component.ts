import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder:FormBuilder){}

  logInForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]],
    password:['', [Validators.required]]
  });

  get email(){
    return this.logInForm.get('email');
  }

  get password(){
    return this.logInForm.get('password');
  }
}
