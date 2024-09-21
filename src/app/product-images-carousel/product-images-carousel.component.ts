import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-product-images-carousel',
  templateUrl: './product-images-carousel.component.html',
  styleUrls: ['./product-images-carousel.component.css']
})

export class ProductImagesCarouselComponent {

  images: { src: string }[] =
  [
    { src: 'assets/images/ro-image8.png' },
    { src: 'assets/images/ro-image7-2.png' },
    { src: 'assets/images/ro-image8.png' },
    { src: 'assets/images/ro-image7-2.png' }
  ];

  // Track the current visible index
  currentIndex = 0;

  constructor(library: FaIconLibrary)
  {
    library.addIcons(faArrowLeft, faArrowRight);
  }

  // Show only two images by calculating the visible range
  get visibleImages()
  {
    if (this.currentIndex + 1 >= this.images.length)
    {
      return [this.images[this.currentIndex], this.images[0]];
    }
    else
    {
      return this.images.slice(this.currentIndex, this.currentIndex + 2);
    }
  }

  prev()
  {
    // Move backward in a circular fashion
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next()
  {
    // Move forward in a circular fashion
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}

