import { AfterViewInit, Component, NgZone } from '@angular/core';

@Component
({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements AfterViewInit {

  images =
  [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg'
  ];

  currentImages = [...this.images];
  transitioning = false;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit()
  {
    this.ngZone.runOutsideAngular(() =>
    {
      this.startCarousel();
    });
  }

  startCarousel()
  {
    setInterval(() =>
    {
      if (!this.transitioning)
      {
        this.ngZone.run(() =>
        {
          this.transitioning = true;
          this.shiftImages();
        });
      }
    }, 3500);
  }

  shiftImages()
  {
    setTimeout(() =>
    {
      this.currentImages.push(this.currentImages.shift()!);
      this.transitioning = false;
    }, 600);
  }

  getClassForImage(index: number): string
  {
    const positionClasses = ['smaller', 'small', 'center', 'small', 'smaller'];
    return positionClasses[index % positionClasses.length];
  }

}
