import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-address-change-success-dialog',
  templateUrl: './address-change-success-dialog.component.html',
  styleUrl: './address-change-success-dialog.component.css'
})

export class AddressChangeSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
