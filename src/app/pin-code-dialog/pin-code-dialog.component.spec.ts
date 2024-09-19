import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinCodeDialogComponent } from './pin-code-dialog.component';

describe('PinCodeDialogComponent', () => {
  let component: PinCodeDialogComponent;
  let fixture: ComponentFixture<PinCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinCodeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
