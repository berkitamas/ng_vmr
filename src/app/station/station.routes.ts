import {RouterModule, Routes} from '@angular/router';
import {SearchStationsComponent} from './search-stations/search-stations.component';
import {StationDetailsComponent} from './station-details/station-details.component';
import {StationDetailsResolver} from './station-details/station-details.resolver';

const routes: Routes = [
  { path: 'station', component: SearchStationsComponent },
  { path: 'station/:id', component: StationDetailsComponent, resolve: {
      station: StationDetailsResolver
  }}
];

export const StationRoutes = RouterModule.forRoot(routes);
