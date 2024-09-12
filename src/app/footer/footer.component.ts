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
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

  constructor(library: FaIconLibrary)
  {
    library.addIcons
    (
      faHome, faInfoCircle,faBookmark,
      faUserLock,faUser, faCartShopping
    );
  }

}
