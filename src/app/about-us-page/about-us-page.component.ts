import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

  constructor(library: FaIconLibrary)
  {
    library.addIcons(faEye, faEyeSlash, faHome);
  }

}
