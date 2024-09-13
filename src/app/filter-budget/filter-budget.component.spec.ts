import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBudgetComponent } from './filter-budget.component';

describe('FilterBudgetComponent', () => {
  let component: FilterBudgetComponent;
  let fixture: ComponentFixture<FilterBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
