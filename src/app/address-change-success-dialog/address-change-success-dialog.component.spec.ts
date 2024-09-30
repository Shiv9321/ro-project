import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressChangeSuccessDialogComponent } from './address-change-success-dialog.component';

describe('AddressChangeSuccessDialogComponent', () => {
  let component: AddressChangeSuccessDialogComponent;
  let fixture: ComponentFixture<AddressChangeSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressChangeSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressChangeSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
