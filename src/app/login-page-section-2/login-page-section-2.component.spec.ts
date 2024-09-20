import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageSection2Component } from './login-page-section-2.component';

describe('LoginPageSection2Component', () => {
  let component: LoginPageSection2Component;
  let fixture: ComponentFixture<LoginPageSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
