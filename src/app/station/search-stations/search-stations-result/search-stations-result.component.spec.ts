import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStationsResultComponent } from './search-stations-result.component';

describe('SearchStationsResultComponent', () => {
  let component: SearchStationsResultComponent;
  let fixture: ComponentFixture<SearchStationsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStationsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStationsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
