import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template:`
    <div>
        <event-thumbnail (eventClick)='handleEventClicked($event)'  [event]='event1'></event-thumbnail>
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

    handleEventClicked(data){
        console.log('received:', data)
    }
}