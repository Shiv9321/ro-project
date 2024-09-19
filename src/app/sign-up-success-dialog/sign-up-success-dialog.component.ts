import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-sign-up-success-dialog',
  templateUrl: './sign-up-success-dialog.component.html',
  styleUrl: './sign-up-success-dialog.component.css'
})

export class SignUpSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
