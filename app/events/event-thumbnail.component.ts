import { Component, Input } from '@angular/core'

@Component ({
    selector: 'event-thumbnail',
    template: `
    <div>
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="{green: event?.time==='8:00 am', bold: event?.time==='8:00 am'}" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span *ngSwitchCase ="'08:00 am'">(Early Start)</span>
                <span *ngSwitchCase ="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left"> {{event?.location?.city}}, {{event.location?.country}}</span>
            </div>
            <div [hidden]="!event?.OnlineUrl">
                Online URL: {{event.OnlineUrl}}</div>
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
    @Input() event:any
    
}