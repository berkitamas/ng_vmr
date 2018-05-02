import {RouterModule, Routes} from '@angular/router';
import {SearchLinesComponent} from './search-lines/search-lines.component';

const routes: Routes = [
  { path: 'line', component: SearchLinesComponent },
];

export const LineRoutes = RouterModule.forRoot(routes);
