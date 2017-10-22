import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberDataComponent } from './subscriber-data.component';

describe('SubscriberDataComponent', () => {
  let component: SubscriberDataComponent;
  let fixture: ComponentFixture<SubscriberDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
