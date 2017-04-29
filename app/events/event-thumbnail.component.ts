import { Component, Input } from '@angular/core'

@Component ({
    selector: 'event-thumbnail',
    template: `
    <div>
        <h1>Upcoming Angular 2 Conferences</h1>
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left"> {{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    </div>
    `,
    styleUrls:['styles.css']
})

export class EventThumbnailComponent{
    @Input() event:any
    
}