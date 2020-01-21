import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  CreateSessionComponent,
  EventResolverService
} from './events/index'

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactiveCreateEvent']},
  { path: 'events', component: EventsListComponent, resolve:{events:EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, resolve:{event:EventResolverService}},
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path:'user', loadChildren:() => import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
