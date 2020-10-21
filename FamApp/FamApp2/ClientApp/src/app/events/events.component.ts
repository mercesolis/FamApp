import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Events } from '../interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Events[];
  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

}
