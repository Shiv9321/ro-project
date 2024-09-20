import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import
{
  faHome, faInfoCircle, faUser,
  faUserLock,faBookmark,faCartShopping,
  faArrowDown, faLanguage, faSearch, faTimes
}
from '@fortawesome/free-solid-svg-icons';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(library: FaIconLibrary, public dialog: MatDialog)
  {
    library.addIcons
    (
      faHome, faInfoCircle,faBookmark,
      faUserLock,faUser, faCartShopping, faArrowDown, faLanguage,
      faSearch, faTimes
    );
  }

  openSearchDialog(): void
  {
    this.dialog.open(SearchDialogComponent);
  }

}
