import {Component, Input, OnInit} from '@angular/core';
import {Route} from '../../../models/route';

@Component({
  selector: 'app-search-lines-results',
  templateUrl: './search-lines-results.component.html',
  styleUrls: ['./search-lines-results.component.css']
})
export class SearchLinesResultsComponent implements OnInit {
  @Input() routes: Route[];

  constructor() { }

  ngOnInit() {
  }

}
