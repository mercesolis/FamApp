import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';
import { EventmodalComponent } from './eventmodal/eventmodal.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CalendarComponent,
    EventsComponent,
    EventmodalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    FormsModule,
    FullCalendarModule,
    ApiAuthorizationModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: CalendarComponent, pathMatch: 'full' },
      { path: 'myevents', component: EventsComponent},
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [EventmodalComponent]
})
export class AppModule { }
