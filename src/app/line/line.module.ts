import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchLinesResultsComponent} from './search-lines/search-lines-results/search-lines-results.component';
import {LineMissedDirective} from './line-missed.directive';
import {SearchLinesFormComponent} from './search-lines/search-lines-form/search-lines-form.component';
import {LineDetailsComponent} from './line-details/line-details.component';
import {SearchLinesComponent} from './search-lines/search-lines.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchLinesComponent,
    SearchLinesFormComponent,
    SearchLinesResultsComponent,
    LineDetailsComponent,
    LineMissedDirective,
  ],
  bootstrap: [SearchLinesComponent]
})
export class LineModule { }
