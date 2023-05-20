import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../custom_Validators/confirmPassword.validators';
import { EnrollmentService } from '../services/enrollment.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private formBuilder:FormBuilder, private _enrollService:EnrollmentService, private http:HttpClient){}
  
  registerationForm = this.formBuilder.group({
    // firstName:['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
    // lastName:['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
    userName:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_@]+$'), Validators.maxLength(20)]],
    email:['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]],
    password:['', [Validators.required]],
    // confirmPassword:['', [Validators.required]]
  },
  // {validator:[ConfirmPasswordValidator]}
  );
  
  /* Form Credentials */
  // instead of using registerationForm.get('firstName') ---> first_name
  /*get first_name(){
    return this.registerationForm.get('firstName');
  }

  get last_name(){
    return this.registerationForm.get('lastName');
  }*/

  get user_name(){
    return this.registerationForm.get('userName');
  }

  get email()
  {
    return this.registerationForm.get('email')
  }

  get password(){
    return this.registerationForm.get('password');
  }

  // get confirm_pass(){
  //   return this.registerationForm.get('confirmPassword');
  // }
  /*End of Form Credentials */

  onSubmit(){
    if (this.registerationForm.invalid) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    
    this.http.post('http://localhost:8000/auth/register/', this.registerationForm.value, { headers })
      .subscribe(
        response => {
          console.log('Registration successful!');
          // Add code to handle successful registration, such as redirecting to the login page
        },
        error => {
          console.error('Registration failed!', error);
          // Add code to handle registration failure, such as displaying an error message
        }
      );
  }
  
  // onSubmit(){
  //   if(this.registerationForm.valid){
  //     const formData = this.registerationForm.value;
  //     this._enrollService.senData(formData).subscribe(
  //       response => {
  //         console.log('Form data has been sent successfully', response);
  //       },
  //       error => {
  //         console.error('Error while sending data:', error);
  //       }
  //     );
  //   }
  // }
}
