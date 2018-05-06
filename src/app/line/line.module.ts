import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchLinesResultsComponent} from './search-lines/search-lines-results/search-lines-results.component';
import {LineMissedDirective} from './line-missed.directive';
import {SearchLinesFormComponent} from './search-lines/search-lines-form/search-lines-form.component';
import {LineDetailsComponent} from './line-details/line-details.component';
import {SearchLinesComponent} from './search-lines/search-lines.component';
import {TrainService} from '../services/train.service';
import {WeatherService} from '../services/weather.service';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatTableModule
} from '@angular/material';
import {WeatherModule} from '../weather/weather.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    WeatherModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    CommonModule
  ],
  declarations: [
    SearchLinesComponent,
    SearchLinesFormComponent,
    SearchLinesResultsComponent,
    LineDetailsComponent,
    LineMissedDirective,
  ],
  providers: [
    TrainService,
    WeatherService
  ],
  bootstrap: [SearchLinesComponent],
  exports: [
    LineDetailsComponent,
    SearchLinesComponent,
    LineMissedDirective
  ]
})
export class LineModule { }
