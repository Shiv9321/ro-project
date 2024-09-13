import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTechnologyComponent } from './filter-technology.component';

describe('FilterTechnologyComponent', () => {
  let component: FilterTechnologyComponent;
  let fixture: ComponentFixture<FilterTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterTechnologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
