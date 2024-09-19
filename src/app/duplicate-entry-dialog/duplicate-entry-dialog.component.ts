import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component
({
  selector: 'app-duplicate-entry-dialog',
  templateUrl: './duplicate-entry-dialog.component.html',
  styleUrls: ['./duplicate-entry-dialog.component.css']
})

export class DuplicateEntryDialogComponent
{
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { }
}
