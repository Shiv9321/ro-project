import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faHome } from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {

  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(library: FaIconLibrary)
  {
    library.addIcons(faEye, faEyeSlash, faHome);
  }

  togglePasswordVisibility()
  {
    this.passwordVisible = !this.passwordVisible;
  }

  login()
  {
    console.log('Login done');
  }
}
