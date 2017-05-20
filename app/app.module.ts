import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'


import {
	EventslistComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventListResolver,
	EventRouteActivator
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.components'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
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
			CreateEventComponent,
			Error404Component
		],
		providers: [
			AuthService,
			EventService,
			ToastrService,
			EventRouteActivator,
			EventListResolver,
			{
				provide : 'canDeactivateCreateEvent',
				useValue: checkDirtyState
			}
			],
		bootstrap : [EventsAppComponent]
})
export class AppModule{}

	function checkDirtyState(component:CreateEventComponent) {
		if (component.isDirty)
			return window.confirm('You have not saved. Do you want to cancel?')
		return true
	}
