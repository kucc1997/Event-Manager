import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventslistComponent } from './events/events-list.components'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
@NgModule({
	imports: [BrowserModule],
	declarations: [
			EventsAppComponent,
			EventslistComponent,
			EventThumbnailComponent
		],
	bootstrap : [EventsAppComponent]

})
export class AppModule{
	
}
