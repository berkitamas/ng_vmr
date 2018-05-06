import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Station} from '../../../models/station';
import {TrainService} from '../../../services/train.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-lines-form',
  templateUrl: './search-lines-form.component.html',
  styleUrls: ['./search-lines-form.component.css']
})
export class SearchLinesFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter<FormGroup>();

  lineSearchForm = new FormGroup({
    fromstation: new FormControl('', Validators.required),
    tostation: new FormControl('', Validators.required),
    fromtime: new FormControl(),
    totime: new FormControl()
  });

  fromStationAuto$: Observable<Station[]>;
  toStationAuto$: Observable<Station[]>;

  constructor(private trainService: TrainService) { }

  ngOnInit() {
    this.lineSearchForm.get('fromstation').valueChanges
      .subscribe(value => {
        if (value.length > 2) {
          this.fromStationAuto$ = this.trainService.searchStations(value);
        } else {
          this.fromStationAuto$ = null;
        }
      });
    this.lineSearchForm.get('tostation').valueChanges
      .subscribe(value => {
        if (value.length > 2) {
          this.toStationAuto$ = this.trainService.searchStations(value);
        } else {
          this.toStationAuto$ = null;
        }
      });
  }

  onFormSubmit() {
    if (this.lineSearchForm.valid) {
      this.formSubmit.emit(this.lineSearchForm);
    }
  }

}
