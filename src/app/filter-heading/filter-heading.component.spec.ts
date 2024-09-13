import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeadingComponent } from './filter-heading.component';

describe('FilterHeadingComponent', () => {
  let component: FilterHeadingComponent;
  let fixture: ComponentFixture<FilterHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
