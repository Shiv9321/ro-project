import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenuSectionComponent } from './dashboard-menu-section.component';

describe('DashboardMenuSectionComponent', () => {
  let component: DashboardMenuSectionComponent;
  let fixture: ComponentFixture<DashboardMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMenuSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
