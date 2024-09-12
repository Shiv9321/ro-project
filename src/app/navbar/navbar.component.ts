import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import
{
  faHome, faInfoCircle, faUser,
  faUserLock,faBookmark,faCartShopping
}
from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(library: FaIconLibrary)
  {
    library.addIcons
    (
      faHome, faInfoCircle,faBookmark,
      faUserLock,faUser, faCartShopping
    );
  }

}
