import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionBuyOnComponent } from './product-section-buy-on.component';

describe('ProductSectionBuyOnComponent', () => {
  let component: ProductSectionBuyOnComponent;
  let fixture: ComponentFixture<ProductSectionBuyOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSectionBuyOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSectionBuyOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
