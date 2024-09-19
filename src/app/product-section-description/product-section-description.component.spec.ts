import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionDescriptionComponent } from './product-section-description.component';

describe('ProductSectionDescriptionComponent', () => {
  let component: ProductSectionDescriptionComponent;
  let fixture: ComponentFixture<ProductSectionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSectionDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSectionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
