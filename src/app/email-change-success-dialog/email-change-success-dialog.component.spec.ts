import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChangeSuccessDialogComponent } from './email-change-success-dialog.component';

describe('EmailChangeSuccessDialogComponent', () => {
  let component: EmailChangeSuccessDialogComponent;
  let fixture: ComponentFixture<EmailChangeSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailChangeSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailChangeSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
