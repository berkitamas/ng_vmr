import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationArrivalComponent } from './station-arrival.component';

describe('StationArrivalComponent', () => {
  let component: StationArrivalComponent;
  let fixture: ComponentFixture<StationArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
