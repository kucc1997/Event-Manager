import { Component, Input } from '@angular/core'
import { ISession } from "../shared/index";

@Component({
//We use this selector in our event-detail Component.
//With the help of selector we parse data into a child component
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent {
    //sessions will now be an Input Property 
    @Input() sessions:ISession[]
}