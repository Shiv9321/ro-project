import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsernameChangeSuccessDialogComponent } from '../username-change-success-dialog/username-change-success-dialog.component';
import { UsernameChangeNotSuccessDialogComponent } from '../username-change-not-success-dialog/username-change-not-success-dialog.component';

@Component
({
  selector: 'app-change-username-dialog',
  templateUrl: './change-username-dialog.component.html',
  styleUrl: './change-username-dialog.component.css'
})

export class ChangeUsernameDialogComponent {

  changeUsernameForm: FormGroup;

  constructor
  (
    private dialogRef: MatDialogRef<ChangeUsernameDialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { username: string }
  )
  {
    this.changeUsernameForm = this.fb.group
    ({
      currentUsername: ['', Validators.required],
      currentEmail: ['', Validators.required],
      newUsername: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  onChangeUsername()
  {
    if( this.changeUsernameForm.invalid )
    {
      return;
    }

    const { currentUsername, currentEmail, newUsername } = this.changeUsernameForm.value;

    this.http.post('http://localhost:3000/api/users/change-username',
                    { currentUsername, currentEmail, newUsername })
    .subscribe
    ({
        next: response =>
        {
          console.log('Username updated successfully', response);
          this.dialogRef.close();
          this.UsernameChangeSuccessDialog();
          this.router.navigate(['/login']);
        },
        error: error =>
        {
          console.error('Error updating Username', error);
          this.UsernameChangeNotSuccessDialog();
        }
    });
  }

  UsernameChangeSuccessDialog()
  {
    this.dialog.open
    (
      UsernameChangeSuccessDialogComponent,
      {
        data:
        {
          message: 'Username updated successfully. Redirecting to login...'
        }
      }
    );
  }

  UsernameChangeNotSuccessDialog()
  {
    this.dialog.open
    (
      UsernameChangeNotSuccessDialogComponent,
      {
        data:
        {
          message: 'May be wrong Current Username or Username not available Try again'
        }
      }
    );
  }

  onCancel(): void
  {
    this.dialogRef.close();
  }

}
