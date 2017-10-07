import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSliderComponent } from './time-slider.component';

describe('TimeSliderComponent', () => {
  let component: TimeSliderComponent;
  let fixture: ComponentFixture<TimeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
