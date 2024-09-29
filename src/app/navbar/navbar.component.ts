import { Component, OnInit } from '@angular/core';
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
import { AuthService } from '../auth.service';

@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string = '';
  profilePicUrl: string = '';

  constructor(library: FaIconLibrary, public dialog: MatDialog,  private authService: AuthService )
  {
    library.addIcons
    (
      faHome, faInfoCircle,faBookmark,
      faUserLock,faUser, faCartShopping, faArrowDown, faLanguage,
      faSearch, faTimes
    );
  }

  ngOnInit(): void
  {
    // Check if the user is logged in
    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn)
    {
      // Fetch username and profile pic from AuthService
      this.username = this.authService.getUsername();
      this.profilePicUrl = this.authService.getProfilePicUrl();
    }
  }

  openSearchDialog(): void
  {
    this.dialog.open(SearchDialogComponent);
  }

}
