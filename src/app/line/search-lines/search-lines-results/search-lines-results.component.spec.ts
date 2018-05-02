import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLinesResultsComponent } from './search-lines-results.component';

describe('SearchLinesResultsComponent', () => {
  let component: SearchLinesResultsComponent;
  let fixture: ComponentFixture<SearchLinesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLinesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLinesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
