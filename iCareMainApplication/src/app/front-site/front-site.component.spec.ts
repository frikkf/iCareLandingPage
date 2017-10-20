import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSiteComponent } from './front-site.component';

describe('FrontSiteComponent', () => {
  let component: FrontSiteComponent;
  let fixture: ComponentFixture<FrontSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
