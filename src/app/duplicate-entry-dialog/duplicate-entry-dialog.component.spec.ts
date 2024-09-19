import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateEntryDialogComponent } from './duplicate-entry-dialog.component';

describe('DuplicateEntryDialogComponent', () => {
  let component: DuplicateEntryDialogComponent;
  let fixture: ComponentFixture<DuplicateEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DuplicateEntryDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
