import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChangeNotSuccessDialogComponent } from './email-change-not-success-dialog.component';

describe('EmailChangeNotSuccessDialogComponent', () => {
  let component: EmailChangeNotSuccessDialogComponent;
  let fixture: ComponentFixture<EmailChangeNotSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailChangeNotSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailChangeNotSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
