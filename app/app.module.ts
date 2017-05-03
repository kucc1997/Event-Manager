import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { EventslistComponent } from './events/events-list.components'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.components'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'

@NgModule({
	imports: [BrowserModule,
	RouterModule.forRoot(appRoutes)
	],
	declarations: [
			EventsAppComponent,
			EventslistComponent,
			EventThumbnailComponent,
			NavBarComponent,
			EventDetailsComponent,
			CreateEventComponent
		],
		providers: [EventService, ToastrService],
		bootstrap : [EventsAppComponent]
})
export class AppModule{

}
