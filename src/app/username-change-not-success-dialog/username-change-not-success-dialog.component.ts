import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-username-change-not-success-dialog',
  templateUrl: './username-change-not-success-dialog.component.html',
  styleUrl: './username-change-not-success-dialog.component.css'
})

export class UsernameChangeNotSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}

