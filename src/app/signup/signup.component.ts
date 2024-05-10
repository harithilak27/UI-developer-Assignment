import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,
  ValidationErrors,
  ValidatorFn, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  // Signup form validate

  messageForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.messageForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]*$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]*$/)]],
      user_email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      re_enter_password: ['', [Validators.required]],
      checkbox_1: ['',[Validators.required]],
      checkbox_2: ['',[Validators.required]],
    }, {
      validators: this.passwordMatchValidator // Add custom validator to check password match
    });
  }

  // Custom validator function to check if password and re-enter password fields match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const reEnterPassword = form.get('re_enter_password');

    if (password && reEnterPassword && password.value !== reEnterPassword.value) {
      reEnterPassword.setErrors({ passwordMismatch: true });
    } else {
      reEnterPassword?.hasError;
    }
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const formData = this.messageForm.value;
      console.log(formData);
    }
  }
}

