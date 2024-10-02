import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardYourOrderPageComponent } from './dashboard-your-order-page.component';

describe('DashboardYourOrderPageComponent', () => {
  let component: DashboardYourOrderPageComponent;
  let fixture: ComponentFixture<DashboardYourOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardYourOrderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardYourOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
