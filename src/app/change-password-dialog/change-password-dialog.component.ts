import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PasswordChangeSuccessDialogComponent } from '../password-change-success-dialog/password-change-success-dialog.component';
import { PasswordChangeNotSuccessDialogComponent } from '../password-change-not-success-dialog/password-change-not-success-dialog.component';

@Component
({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.css'
})

export class ChangePasswordDialogComponent {

  changePasswordForm: FormGroup;
  passwordVisible1: boolean = false;
  passwordVisible2: boolean = false;
  passwordVisible3: boolean = false;

  constructor
  (
    private dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    private fb: FormBuilder, library: FaIconLibrary,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { username: string }
  )
  {
    this.changePasswordForm = this.fb.group
    ({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    library.addIcons( faEye, faEyeSlash);
  }

  togglePasswordVisibility1()
  {
    this.passwordVisible1 = !this.passwordVisible1;
  }

  togglePasswordVisibility2()
  {
    this.passwordVisible2 = !this.passwordVisible2;
  }

  togglePasswordVisibility3()
  {
    this.passwordVisible3 = !this.passwordVisible3;
  }

  onChangePassword()
  {
    if
    (
      this.changePasswordForm.invalid ||
      this.changePasswordForm.value.newPassword !==
        this.changePasswordForm.value.confirmPassword
    )
    {
      return;
    }

    const { currentPassword, newPassword } = this.changePasswordForm.value;
    const username = this.data.username;

    this.http.post('http://localhost:3000/api/users/change-password',
                    { username, currentPassword, newPassword })
    .subscribe
    ({
        next: response =>
        {
          console.log('Password updated successfully', response);
          this.dialogRef.close();
          this.passwordChangeSuccessDialog();
          this.router.navigate(['/login']);
        },
        error: error =>
        {
          console.error('Error updating password', error);
          this.passwordChangeNotSuccessDialog();
        }
    });
  }

  passwordChangeSuccessDialog()
  {
    this.dialog.open
    (
      PasswordChangeSuccessDialogComponent,
      {
        data:
        {
          message: 'Going to Login'
        }
      }
    );
  }

  passwordChangeNotSuccessDialog()
  {
    this.dialog.open
    (
      PasswordChangeNotSuccessDialogComponent,
      {
        data:
        {
          message: 'May be wrong Current password try again'
        }
      }
    );
  }

  onCancel(): void
  {
    this.dialogRef.close();
  }

}
