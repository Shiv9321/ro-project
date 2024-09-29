import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-login-again-please-dialog',
  templateUrl: './login-again-please-dialog.component.html',
  styleUrl: './login-again-please-dialog.component.css'
})

export class LoginAgainPleaseDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
