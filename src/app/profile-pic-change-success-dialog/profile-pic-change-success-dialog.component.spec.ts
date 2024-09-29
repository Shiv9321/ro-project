import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicChangeSuccessDialogComponent } from './profile-pic-change-success-dialog.component';

describe('ProfilePicChangeSuccessDialogComponent', () => {
  let component: ProfilePicChangeSuccessDialogComponent;
  let fixture: ComponentFixture<ProfilePicChangeSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePicChangeSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePicChangeSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
