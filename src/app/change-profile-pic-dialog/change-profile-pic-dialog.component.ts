import { Component, Inject } from '@angular/core';
import { ProfilePicChangeNotSuccessDialogComponent } from '../profile-pic-change-not-success-dialog/profile-pic-change-not-success-dialog.component';
import { ProfilePicChangeSuccessDialogComponent } from '../profile-pic-change-success-dialog/profile-pic-change-success-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-change-profile-pic-dialog',
  templateUrl: './change-profile-pic-dialog.component.html',
  styleUrl: './change-profile-pic-dialog.component.css'
})

export class ChangeProfilePicDialogComponent
{
  changeProfilePicForm!: FormGroup;
  selectedFile!: File;
  username: string = '';

  constructor
  (
    private dialogRef: MatDialogRef<ChangeProfilePicDialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    this.changeProfilePicForm = this.fb.group
    ({
      profilePic: [null, Validators.required]
    });
    this.username = data.username;
    console.log("username in change -p profile picture" + this.username);
  }

  onFileSelected(event: Event)
  {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length)
    {
      this.selectedFile = input.files[0];
      this.changeProfilePicForm.patchValue({ profilePic: this.selectedFile });
    }
    console.log("file selected for changing picture");
  }

  onChangeProfilePic()
  {
    console.log("Starting change");

    if (this.changeProfilePicForm.invalid)
    {
      return;
    }

    const formData = new FormData();
    formData.append('profilePic', this.selectedFile!);
    formData.append('username', this.username);
    console.log("form data reached change");

    this.http.post('http://localhost:3000/api/users/change-profile-pic', formData)
      .subscribe
      ({
        next: response =>
        {
          console.log('Profile Pic updated successfully', response);
          this.dialogRef.close();
          this.ProfilePicChangeSuccessDialog();
          this.router.navigate(['/login']);
        },
        error: error =>
        {
          console.error('Error updating Profile Pic', error);
          const Url = `http://localhost:3000/api/users/change-profile-pic`;
          console.log('Profile Picture URL:', Url);

          if (error.error)
          {
            console.error('Server responded with:', error.error);
          }
          else
          {
            console.error('Unexpected error:', error);
          }
          this.ProfilePicChangeNotSuccessDialog();
        }
      });
  }

  ProfilePicChangeSuccessDialog()
  {
    this.dialog.open(ProfilePicChangeSuccessDialogComponent,
    {
      data:
      {
        message: 'Profile Pic updated successfully. Redirecting to login...'
      }
    });
  }

  ProfilePicChangeNotSuccessDialog()
  {
    this.dialog.open
    (
      ProfilePicChangeNotSuccessDialogComponent,
    {
      data:
      {
        message: 'Something went wrong, try again'
      }
    });
  }

  onCancel(): void
  {
    this.dialogRef.close();
  }

}
