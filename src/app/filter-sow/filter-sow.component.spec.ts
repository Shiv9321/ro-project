import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSowComponent } from './filter-sow.component';

describe('FilterSowComponent', () => {
  let component: FilterSowComponent;
  let fixture: ComponentFixture<FilterSowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterSowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
