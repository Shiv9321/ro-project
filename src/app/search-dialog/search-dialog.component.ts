import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrl: './search-dialog.component.css'
})
export class SearchDialogComponent {

  constructor(public dialogRef: MatDialogRef<SearchDialogComponent>) {}

  onCancel(): void
  {
    this.dialogRef.close();
  }

}
