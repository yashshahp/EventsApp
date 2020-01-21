import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EventService,
  IEvent
} from '../shared/index'
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
  

}
