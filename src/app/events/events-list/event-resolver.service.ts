import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any>{

  constructor(private evnetService:EventService) { }
  resolve(route: ActivatedRouteSnapshot){
    return this.evnetService.getEvent(route.params['id'])
  }
}
