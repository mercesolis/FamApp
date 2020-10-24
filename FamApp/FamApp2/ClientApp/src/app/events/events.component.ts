import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Events } from '../interfaces/events';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventmodalComponent } from '../eventmodal/eventmodal.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    start: null,
    description: '',
  };
  closeResult = '';
  constructor(private eventService: EventService, private modalService: NgbModal, private snackBar: MatSnackBar) { }

  
  
  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  public async addEvent() {
    const newEvent = await this.eventService.addEvent(this.newEvent);
    this.events.push(newEvent);

  }

  async open(): Promise<void> {
    const modal = this.modalService.open(EventmodalComponent);
    const modalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;
    const theResult = await modal.result;

    if(theResult === 'yes'){
      this.snackBar.open('Event Added!', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      this.events = await this.eventService.getEvents();
    }

    




  
  }
}


