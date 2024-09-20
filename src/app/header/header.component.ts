import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLanguage,faSearch, faTimes, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { PinCodeDialogComponent } from '../pin-code-dialog/pin-code-dialog.component';

@Component
({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  locationText = 'Your Location';
  showSearchInput = false;
  selectedLanguage = 'en'; // Default
  languages =
  [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' }
  ];

  constructor(library: FaIconLibrary, public dialog: MatDialog)
  {
    library.addIcons
    (
      faLanguage, faSearch, faTimes, faMapLocation
    );
  }

  toggleSearch(): void
  {
    this.showSearchInput = !this.showSearchInput;
  }

  changeLanguage(event: any): void
  {
    const languageCode = event.value;
    console.log(`Language selected: ${languageCode}`);
  }

  openPinCodeDialog(): void
  {
    const dialogRef = this.dialog.open(PinCodeDialogComponent);

    dialogRef.afterClosed().subscribe(result =>
    {
      if (result)
      {
        this.locationText = `At ${result}`;
      }
    });
  }

}
