import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgainPleaseDialogComponent } from './login-again-please-dialog.component';

describe('LoginAgainPleaseDialogComponent', () => {
  let component: LoginAgainPleaseDialogComponent;
  let fixture: ComponentFixture<LoginAgainPleaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAgainPleaseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAgainPleaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
