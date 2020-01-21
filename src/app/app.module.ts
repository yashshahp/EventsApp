import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolverService,
} from './events/index'
import { Error404Component } from './errors/404.component'
import { NavbarComponent } from './nav/navbar.component';
import { AuthService} from './user/auth.service';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, collapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index'

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,  
    collapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    EventListResolverService,
    EventResolverService,
    AuthService,
    VoterService,
    {
      provide: 'canDeactiveCreateEvent', useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: JQ_TOKEN, useValue: jQuery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  else {
    return true;
  }

}
