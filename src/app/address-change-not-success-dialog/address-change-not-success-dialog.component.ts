import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-address-change-not-success-dialog',
  templateUrl: './address-change-not-success-dialog.component.html',
  styleUrl: './address-change-not-success-dialog.component.css'
})

export class AddressChangeNotSuccessDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

}
