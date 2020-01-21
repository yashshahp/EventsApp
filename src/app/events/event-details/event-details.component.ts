import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service"
import {ActivatedRoute, Params} from "@angular/router"
import { IEvent, ISession } from '../shared/index';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy:string='votes';
  constructor(private eventService:EventService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((data)=>{
        this.event= data['event'];
        this.addMode=false;
      })
    }

  addSession(){
    this.addMode=true;
  }
  cancelAddSession(){
    this.addMode=false;
  }
  saveNewSession(session:ISession){
     const nextId = Math.max.apply(null,this.event.sessions.map(s =>s.id));
     session.id = nextId + 1
     this.event.sessions.push(session)
     this.eventService.saveEvent(this.event).subscribe();
     this.addMode=false;
  }

}
