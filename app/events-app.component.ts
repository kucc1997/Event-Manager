import {Component} from '@angular/core'
import { NavBarComponent } from './nav/navbar.components'
@Component({
	selector: "events-app",
	template:`
		<nav-bar></nav-bar>
		<router-outlet></router-outlet>
		<!-- <events-list></events-list> -->
	`
})

export class EventsAppComponent{

}