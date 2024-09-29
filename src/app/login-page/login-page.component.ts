import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorDialogComponent } from '../login-error-dialog/login-error-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component
({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  loginForm: FormGroup;
  passwordVisible: boolean = false;

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

    this.loginForm = this.fb.group
    ({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility()
  {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {

    if (this.loginForm.invalid)
    {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.value;

    console.log('Attempting login with username:', username);

    this.authService.login({ username, password })
      .subscribe
      ({
        next: (response) =>
        {
          console.log('Login successful', response);

          const profilePicUrl = response.profilePicUrl || 'assets/images/default-profile.jpg';

          // Store the user data and start the session
          this.authService.storeUserData(username, profilePicUrl);

          this.router.navigate([`/welcome/${username}/profile-page`]);
        },
        error: (error) =>
        {
          console.error('Login failed', error);
          if (error.status === 401)
          {
            this.openErrorDialog();
          }
        }
      });
  }

  openErrorDialog()
  {
    this.dialog.open
    (
      LoginErrorDialogComponent,
      {
        data:
        {
          message: 'Credentials did not found.Please try again.'
        }
      }
    );
  }

}
