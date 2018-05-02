import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStationsFormComponent } from './search-stations-form.component';

describe('SearchStationsFormComponent', () => {
  let component: SearchStationsFormComponent;
  let fixture: ComponentFixture<SearchStationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
