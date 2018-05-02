import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RootComponent} from './root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'line', loadChildren: 'app/line/line.module#LineModule'}
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(routes);
