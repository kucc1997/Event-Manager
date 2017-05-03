import { Routes } from '@angular/router'
import { EventslistComponent } from './events/events-list.components'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from "./events/create-event.component"
import { Error404Component } from "./errors/404.component";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent },
    {path: 'events', component: EventslistComponent },
    {path: 'events/:id', component:EventDetailsComponent },
    { path: '404', component:Error404Component},
    {path:'', redirectTo: '/events', pathMatch: 'full' }
]