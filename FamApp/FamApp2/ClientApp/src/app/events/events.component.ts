import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Events } from '../interfaces/events';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Events[];
  public newEvent: Events = {
    id: undefined,
    title: '',
    date: null,
    description: '',
  };
  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  public async addEvent() {
    const newEvent = await this.eventService.addEvent(this.newEvent);
    this.events.push(newEvent);

  }

}
