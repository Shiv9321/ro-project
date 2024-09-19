import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesCarouselComponent } from './product-images-carousel.component';

describe('ProductImagesCarouselComponent', () => {
  let component: ProductImagesCarouselComponent;
  let fixture: ComponentFixture<ProductImagesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductImagesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
