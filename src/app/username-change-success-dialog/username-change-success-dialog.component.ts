import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-username-change-success-dialog',
  templateUrl: './username-change-success-dialog.component.html',
  styleUrl: './username-change-success-dialog.component.css'
})

export class UsernameChangeSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
