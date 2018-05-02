import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../../../models/station';

@Component({
  selector: 'app-search-stations-result',
  templateUrl: './search-stations-result.component.html',
  styleUrls: ['./search-stations-result.component.css']
})
export class SearchStationsResultComponent implements OnInit {
  @Input() station: Station;
  constructor() { }

  ngOnInit() {
  }

}
