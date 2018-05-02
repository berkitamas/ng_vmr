import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDepartureComponent } from './station-departure.component';

describe('StationDepartureComponent', () => {
  let component: StationDepartureComponent;
  let fixture: ComponentFixture<StationDepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationDepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
