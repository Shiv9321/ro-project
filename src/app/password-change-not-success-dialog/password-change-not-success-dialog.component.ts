import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-password-change-not-success-dialog',
  templateUrl: './password-change-not-success-dialog.component.html',
  styleUrl: './password-change-not-success-dialog.component.css'
})

export class PasswordChangeNotSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
