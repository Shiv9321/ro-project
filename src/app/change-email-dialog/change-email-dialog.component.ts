import { Component, Inject } from '@angular/core';
import { EmailChangeNotSuccessDialogComponent } from '../email-change-not-success-dialog/email-change-not-success-dialog.component';
import { EmailChangeSuccessDialogComponent } from '../email-change-success-dialog/email-change-success-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-change-email-dialog',
  templateUrl: './change-email-dialog.component.html',
  styleUrl: './change-email-dialog.component.css'
})

export class ChangeEmailDialogComponent {

  changeEmailForm!: FormGroup;

  constructor
  (
    private dialogRef: MatDialogRef<ChangeEmailDialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  )
  {
    this.changeEmailForm = this.fb.group
    ({
      currentEmail: ['', Validators.required],
      newEmail: ['', [Validators.required],]
    });
  }

  onChangeEmail()
  {
    if( this.changeEmailForm.invalid )
    {
      return;
    }

    const { currentEmail, newEmail } = this.changeEmailForm.value;

    this.http.post('http://localhost:3000/api/users/change-email',
                    { currentEmail, newEmail })
    .subscribe
    ({
        next: response =>
        {
          console.log('Email updated successfully', response);
          this.dialogRef.close();
          this.EmailChangeSuccessDialog();
          this.router.navigate(['/login']);
        },
        error: error =>
        {
          console.error('Error updating Email', error);
          this.EmailChangeNotSuccessDialog();
        }
    });
  }

  EmailChangeSuccessDialog()
  {
    this.dialog.open
    (
      EmailChangeSuccessDialogComponent,
      {
        data:
        {
          message: 'Email updated successfully. Redirecting to login...'
        }
      }
    );
  }

  EmailChangeNotSuccessDialog()
  {
    this.dialog.open
    (
      EmailChangeNotSuccessDialogComponent,
      {
        data:
        {
          message: 'May be wrong Current Email or Email not available Try again'
        }
      }
    );
  }

  onCancel(): void
  {
    this.dialogRef.close();
  }

}
