

import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1> Upcoming Angualr2 Conferences</h1>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click) ="handleThumbnailClick(event.name)"  [event]="event"></event-thumbnail>
            </div>
        </div>    
    </div>
    `
})    

export class EventslistComponent implements OnInit{
  events:any

  constructor(private eventService: EventService) {
    
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events = this.eventService.getEvents()
  }

 
  handleThumbnailClick(eventName) {
 const test= toastr
  return   toastr.success(eventName)
  }
}