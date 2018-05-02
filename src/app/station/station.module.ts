import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchStationsComponent} from './search-stations/search-stations.component';
import {StationArrivalComponent} from './station-details/station-arrival/station-arrival.component';
import {StationDepartureComponent} from './station-details/station-departure/station-departure.component';
import {SearchStationsFormComponent} from './search-stations/search-stations-form/search-stations-form.component';
import {StationDetailsComponent} from './station-details/station-details.component';
import {SearchStationsResultComponent} from './search-stations/search-stations-result/search-stations-result.component';
import {StationRoutes} from './station.routes';
import {StationDetailsResolver} from './station-details/station-details.resolver';

@NgModule({
  imports: [
    StationRoutes,
    CommonModule
  ],
  declarations: [
    SearchStationsComponent,
    SearchStationsFormComponent,
    SearchStationsResultComponent,
    StationDetailsComponent,
    StationArrivalComponent,
    StationDepartureComponent,
  ],
  providers: [
    StationDetailsResolver
  ],
  bootstrap: [SearchStationsComponent]
})
export class StationModule { }
