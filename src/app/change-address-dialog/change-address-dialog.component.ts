import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddressChangeNotSuccessDialogComponent } from '../address-change-not-success-dialog/address-change-not-success-dialog.component';
import { AddressChangeSuccessDialogComponent } from '../address-change-success-dialog/address-change-success-dialog.component';

@Component
({
  selector: 'app-change-address-dialog',
  templateUrl: './change-address-dialog.component.html',
  styleUrl: './change-address-dialog.component.css'
})

export class ChangeAddressDialogComponent {

  changeAddressForm!: FormGroup;

  constructor
  (
    private dialogRef: MatDialogRef<ChangeAddressDialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  )
  {
    this.changeAddressForm = this.fb.group
    ({
      currentEmail: ['', Validators.required],
      newAddress: ['', [Validators.required],]
    });
  }

  onChangeAddress()
  {
    if( this.changeAddressForm.invalid )
    {
      return;
    }

    const { currentEmail, newAddress } = this.changeAddressForm.value;

    this.http.post('http://localhost:3000/api/users/change-address',
                    { currentEmail, newAddress })
    .subscribe
    ({
        next: response =>
        {
          console.log('Address updated successfully', response);
          this.dialogRef.close();
          this.AddressChangeSuccessDialog();
          this.router.navigate(['/login']);
        },
        error: error =>
        {
          console.error('Error updating Address', error);
          this.AddressChangeNotSuccessDialog();
        }
    });
  }

  AddressChangeSuccessDialog()
  {
    this.dialog.open
    (
      AddressChangeSuccessDialogComponent,
      {
        data:
        {
          message: 'Address updated successfully. Redirecting to login...'
        }
      }
    );
  }

  AddressChangeNotSuccessDialog()
  {
    this.dialog.open
    (
      AddressChangeNotSuccessDialogComponent,
      {
        data:
        {
          message: 'Error check Email again, Try Again or some time later... '
        }
      }
    );
  }

  onCancel(): void
  {
    this.dialogRef.close();
  }

}
