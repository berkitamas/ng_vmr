import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search-stations-form',
  templateUrl: './search-stations-form.component.html',
  styleUrls: ['./search-stations-form.component.css']
})
export class SearchStationsFormComponent implements OnInit {

  @Output() searchValueChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(value: string) {
    this.searchValueChanged.emit(value);
  }

}
