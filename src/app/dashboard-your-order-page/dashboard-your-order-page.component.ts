import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import
{
  faSearch
}
from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-dashboard-your-order-page',
  templateUrl: './dashboard-your-order-page.component.html',
  styleUrl: './dashboard-your-order-page.component.css'
})

export class DashboardYourOrderPageComponent {

  constructor(library: FaIconLibrary)
  {
    library.addIcons
    (
      faSearch
    );
  }

}
