import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUseContentComponent } from './why-use-content.component';

describe('WhyUseContentComponent', () => {
  let component: WhyUseContentComponent;
  let fixture: ComponentFixture<WhyUseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyUseContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
