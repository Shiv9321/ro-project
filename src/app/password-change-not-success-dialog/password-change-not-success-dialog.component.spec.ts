import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeNotSuccessDialogComponent } from './password-change-not-success-dialog.component';

describe('PasswordChangeNotSuccessDialogComponent', () => {
  let component: PasswordChangeNotSuccessDialogComponent;
  let fixture: ComponentFixture<PasswordChangeNotSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordChangeNotSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordChangeNotSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
