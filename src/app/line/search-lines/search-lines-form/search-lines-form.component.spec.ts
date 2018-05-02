import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLinesFormComponent } from './search-lines-form.component';

describe('SearchLinesFormComponent', () => {
  let component: SearchLinesFormComponent;
  let fixture: ComponentFixture<SearchLinesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLinesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
