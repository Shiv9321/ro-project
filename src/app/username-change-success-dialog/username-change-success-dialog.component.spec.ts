import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameChangeSuccessDialogComponent } from './username-change-success-dialog.component';

describe('UsernameChangeSuccessDialogComponent', () => {
  let component: UsernameChangeSuccessDialogComponent;
  let fixture: ComponentFixture<UsernameChangeSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernameChangeSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameChangeSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
