import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faHome } from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})

export class SignUpPageComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordVisible: boolean = false;

  constructor(library: FaIconLibrary)
  {
    library.addIcons(faEye, faEyeSlash, faHome);
  }

  togglePasswordVisibility()
  {
    this.passwordVisible = !this.passwordVisible;
  }

  signUp()
  {
    console.log('Sign-up complete');
  }
}
