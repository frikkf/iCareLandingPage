import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForTrialComponent } from './signup-for-trial.component';

describe('SignupForTrialComponent', () => {
  let component: SignupForTrialComponent;
  let fixture: ComponentFixture<SignupForTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupForTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupForTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
