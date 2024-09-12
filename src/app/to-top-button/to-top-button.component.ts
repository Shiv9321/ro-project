import { Component, HostListener } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.css']
})

export class ToTopButtonComponent {

  showScrollToTop = false;

  constructor(library: FaIconLibrary)
  {
    library.addIcons(faArrowUp);
  }

  @HostListener('window:scroll', [])
  onWindowScroll()
  {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop
                            || document.body.scrollTop || 0;

    this.showScrollToTop = scrollPosition > 100;
  }

  scrollToTop()
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
