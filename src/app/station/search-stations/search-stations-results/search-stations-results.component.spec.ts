import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStationsResultsComponent } from './search-stations-results.component';

describe('SearchStationsResultsComponent', () => {
  let component: SearchStationsResultsComponent;
  let fixture: ComponentFixture<SearchStationsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStationsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStationsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
