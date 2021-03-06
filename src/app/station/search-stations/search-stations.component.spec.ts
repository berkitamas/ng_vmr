import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStationsComponent } from './search-stations.component';

describe('SearchStationsComponent', () => {
  let component: SearchStationsComponent;
  let fixture: ComponentFixture<SearchStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
