import { Component, OnInit } from '@angular/core';
import { FullCalendarModule, Calendar } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { createEventId } from './event-utils';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { EventService } from '../services/event.service';
import { Events } from '../interfaces/events';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: Events[];
  public newEvent: Events = {
    id: undefined,
    title: '',
    description: '',
    start: null,

  };

  eventId = 0;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today addEventButton',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    customButtons: {
      addEventButton: {
        text: 'add event...',
        /*click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time*/
      }
    },
    events: [
      {
        title: 'Capstone',
        start: '2020-10-25'
      },
      {
        title: 'birthday',
        start: '2020-10-26',
        end: '2020-10-28'
      }
    ],
    editable: true,
    selectable: true,
    selectMirror: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventsSet: this.handleEvents.bind(this),
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  currentEvents: EventService[] = [];

  constructor(private eventService: EventService) {}

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  handleDateClick(arg) {
  alert('date click! ' + arg.dateStr);
  }

  handleEvents(events: EventService[]) {
    this.currentEvents = events;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;


    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: this.createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }

  }

  createEventId() {
    return String(this.eventId++);
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

}





