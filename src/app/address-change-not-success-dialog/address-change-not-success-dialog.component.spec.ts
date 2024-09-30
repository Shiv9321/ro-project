import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressChangeNotSuccessDialogComponent } from './address-change-not-success-dialog.component';

describe('AddressChangeNotSuccessDialogComponent', () => {
  let component: AddressChangeNotSuccessDialogComponent;
  let fixture: ComponentFixture<AddressChangeNotSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressChangeNotSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressChangeNotSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
