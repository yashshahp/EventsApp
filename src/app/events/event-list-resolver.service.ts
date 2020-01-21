import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any>{

  constructor(private evnetService:EventService) { }
  resolve(){
    return this.evnetService.getEvents()
  }
}
