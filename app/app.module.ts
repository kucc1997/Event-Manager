import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
	CreateEventComponent,
	CreateSessionComponent,
	EventslistComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	EventListResolver,
	EventRouteActivator,
    SessionListComponent
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.components'
import { ToastrService } from './common/toastr.service'
import {CollapsibleWellComponent } from './common/collapsible-well.component' 
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
	imports: [BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
	],
	declarations: [
			CreateEventComponent,
			CollapsibleWellComponent,	
			EventsAppComponent,
			EventslistComponent,
			EventThumbnailComponent,
			EventDetailsComponent,
			Error404Component,
			NavBarComponent,
			CreateSessionComponent,
			SessionListComponent

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
