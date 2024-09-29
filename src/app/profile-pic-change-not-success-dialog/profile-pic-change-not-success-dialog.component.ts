import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-profile-pic-change-not-success-dialog',
  templateUrl: './profile-pic-change-not-success-dialog.component.html',
  styleUrl: './profile-pic-change-not-success-dialog.component.css'
})

export class ProfilePicChangeNotSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
