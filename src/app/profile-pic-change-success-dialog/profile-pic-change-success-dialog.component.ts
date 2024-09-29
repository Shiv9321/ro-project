import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-profile-pic-change-success-dialog',
  templateUrl: './profile-pic-change-success-dialog.component.html',
  styleUrl: './profile-pic-change-success-dialog.component.css'
})

export class ProfilePicChangeSuccessDialogComponent {

constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
