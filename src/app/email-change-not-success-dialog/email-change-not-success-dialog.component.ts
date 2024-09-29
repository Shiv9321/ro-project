import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-email-change-not-success-dialog',
  templateUrl: './email-change-not-success-dialog.component.html',
  styleUrl: './email-change-not-success-dialog.component.css'
})

export class EmailChangeNotSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
