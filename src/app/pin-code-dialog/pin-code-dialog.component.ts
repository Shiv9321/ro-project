import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component
({
  selector: 'app-pin-code-dialog',
  templateUrl: './pin-code-dialog.component.html',
})

export class PinCodeDialogComponent {

  pinCode: string = '';
  isNumeric: boolean = true;

  constructor(public dialogRef: MatDialogRef<PinCodeDialogComponent>) {}

  onPinCodeInput()
  {
    this.isNumeric = /^\d+$/.test(this.pinCode);
  }

  onCancel(): void
  {
    this.dialogRef.close();
  }

  onSubmit(): void
  {
    if (this.pinCode.length === 6)
    {
      this.dialogRef.close(this.pinCode);
    }
  }

}
