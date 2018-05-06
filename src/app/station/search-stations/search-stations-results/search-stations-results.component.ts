import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../../../models/station';

@Component({
  selector: 'app-search-stations-results',
  templateUrl: './search-stations-results.component.html',
  styleUrls: ['./search-stations-results.component.css']
})
export class SearchStationsResultsComponent implements OnInit {
  @Input() stations: Station[];
  constructor() { }

  ngOnInit() {
  }

}
