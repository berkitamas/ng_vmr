import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Station} from '../../models/station';
import {TrainService} from '../../services/train.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StationDetailsResolver implements Resolve<Station> {

  constructor(private trainService: TrainService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Station> {
    const id = route.paramMap.get('id');

    console.log(id);

    return this.trainService.getStation(Number(id));
  }
}
