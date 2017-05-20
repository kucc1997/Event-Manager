import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'
@Component ({
    selector: 'event-thumbnail',
    template: `
    <div>
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span *ngSwitchCase ="'08:00 am'">(Early Start)</span>
                <span *ngSwitchCase ="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div [ngClass]="getStartLocationClass()" *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left"> {{event?.location?.city}}, {{event.location?.country}}</span>
            </div>
            <div [hidden]="!event?.OnlineUrl">
                OnlineUrl: {{event.onlineUrl}}</div>
        </div>
    </div>
    `,
    styles: [`
    .green {color: #003300 !important;}
    .bold {font-weight: bold;}
        .pad-left {margin-left:10px;}
        .well div {color: lightsteelblue;}
        .thumbnail {min-height:210px;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent
    
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '08:00 am'
        return { green: isEarlyStart, bold: isEarlyStart}
    }

    getStartLocationClass(){
        // returning string 
        if( this.event && this.event.location.country=='USA')
            return ['green', 'bold']
        return []
        // return classes with space separated
        // const isStartLocation = this.event && this.event.location.country =='USA'
        // return {green:isStartLocation, bold: isStartLocation}

    }
}