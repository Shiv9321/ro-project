import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import
{
  faHome, faInfoCircle, faUser,
  faUserLock,faBookmark,faCartShopping,
  faMapLocation
}
from '@fortawesome/free-solid-svg-icons';
import { PinCodeDialogComponent } from '../pin-code-dialog/pin-code-dialog.component';

@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  locationText = 'Your Location';

  constructor(library: FaIconLibrary, public dialog: MatDialog)
  {
    library.addIcons
    (
      faHome, faInfoCircle,faBookmark,
      faUserLock,faUser, faCartShopping, faMapLocation
    );
  }

  openPinCodeDialog(): void {
    const dialogRef = this.dialog.open(PinCodeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.locationText = `At ${result}`;
      }
    });
  }

}
