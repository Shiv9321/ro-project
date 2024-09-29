import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameChangeNotSuccessDialogComponent } from './username-change-not-success-dialog.component';

describe('UsernameChangeNotSuccessDialogComponent', () => {
  let component: UsernameChangeNotSuccessDialogComponent;
  let fixture: ComponentFixture<UsernameChangeNotSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernameChangeNotSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameChangeNotSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
