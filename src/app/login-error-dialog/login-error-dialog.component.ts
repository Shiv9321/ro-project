import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component
({
  selector: 'app-login-error-dialog',
  templateUrl: './login-error-dialog.component.html',
  styleUrls: ['./login-error-dialog.component.css']
})

export class LoginErrorDialogComponent
{
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }
}
