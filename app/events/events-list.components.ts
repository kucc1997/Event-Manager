import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template:`
    <div>
        <event-thumbnail #thumbnail [event]='event1'></event-thumbnail>
        <h2>{{thumbnail.someProperty}}</h2>
        <button class="btn bnt-primary" (click) ="thumbnail.logFoo()">Click Me..! </button>
    </div>
    `
})    

export class EventslistComponent{
    event1 ={
        id:1,
        name: 'Angular Conf1',
        date: '9/26/2017',
        time: '11:11 am',
        price: 100,
        imageUrl: '/app/assets/images/angularconnect-shiled.png',
        location:{
            address:'111',
            city:'Banepa',
            country:'Nepal'
        }
    }
}