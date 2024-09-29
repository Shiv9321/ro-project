import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContactPageComponent } from './dashboard-contact-page.component';

describe('DashboardContactPageComponent', () => {
  let component: DashboardContactPageComponent;
  let fixture: ComponentFixture<DashboardContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardContactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
