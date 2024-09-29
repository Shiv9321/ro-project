import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DuplicateEntryDialogComponent } from '../duplicate-entry-dialog/duplicate-entry-dialog.component';
import { SignUpSuccessDialogComponent } from '../sign-up-success-dialog/sign-up-success-dialog.component';

@Component
({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent {

  signUpForm: FormGroup;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor
  (
    library: FaIconLibrary,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  )
  {
    library.addIcons(faEye, faEyeSlash, faHome);

    this.signUpForm = this.fb.group
    ({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validators: this.passwordMatchValidator
    });
  }

  get f()
  {
    return this.signUpForm.controls;
  }

  togglePasswordVisibility1()
  {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility()
  {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  signUp() {

    if (this.signUpForm.invalid)
    {
      return;
    }

    const { username, email, password } = this.signUpForm.value;

    this.authService.signUp({ username, email, password })
      .subscribe
      ({
        next: (response) =>
        {
          console.log('Signup successful', response);
          this.openSignUpSuccessDialog();
          this.router.navigate(['/login']);

        },
        error: (error) =>
        {
          console.error('Signup failed', error);
          this.openDuplicateDialog();
        }
      });
  }

  openSignUpSuccessDialog()
  {
    this.dialog.open
    (
      SignUpSuccessDialogComponent,
      {
        data:
        {
          message: 'Going to Login now'
        }
      }
    );
  }

  openDuplicateDialog()
  {
    this.dialog.open
    (
      DuplicateEntryDialogComponent,
      {
        data:
        {
          message: 'Might be due to a user with this email or username already exists. Please try again.'
        }
      }
    );
  }

  passwordMatchValidator(form: FormGroup)
  {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}

