import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root/root.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'line', loadChildren: 'app/line/line.module#LineModule'},
  { path: 'station', loadChildren: 'app/station/station.module#StationModule'},
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
