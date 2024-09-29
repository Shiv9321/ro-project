import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicChangeNotSuccessDialogComponent } from './profile-pic-change-not-success-dialog.component';

describe('ProfilePicChangeNotSuccessDialogComponent', () => {
  let component: ProfilePicChangeNotSuccessDialogComponent;
  let fixture: ComponentFixture<ProfilePicChangeNotSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePicChangeNotSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePicChangeNotSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
