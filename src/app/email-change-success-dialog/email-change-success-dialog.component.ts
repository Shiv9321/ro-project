import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-email-change-success-dialog',
  templateUrl: './email-change-success-dialog.component.html',
  styleUrl: './email-change-success-dialog.component.css'
})

export class EmailChangeSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
