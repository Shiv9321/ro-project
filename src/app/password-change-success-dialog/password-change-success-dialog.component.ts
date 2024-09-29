import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-password-change-success-dialog',
  templateUrl: './password-change-success-dialog.component.html',
  styleUrl: './password-change-success-dialog.component.css'
})

export class PasswordChangeSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
