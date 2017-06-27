import { Component, Input, OnChanges } from '@angular/core'
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
    @Input() filterBy: string
    visibleSessions: ISession[] = []

    
    ngOnChanges(){
        if(this.sessions){
          this.filterSessions(this.filterBy)  
        }

    }

    filterSessions(filter) {
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0)

        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })

        }
            
    }
}