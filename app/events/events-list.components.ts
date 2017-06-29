

import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from "./shared/index";

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1> Upcoming Angualr2 Conferences</h1>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>    
    </div>
    `
})    

export class EventslistComponent implements OnInit{
  events:IEvent[]
  constructor(private eventService: EventService, private route:ActivatedRoute) {
  }

  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events = this.route.snapshot.data['events']
  }
}