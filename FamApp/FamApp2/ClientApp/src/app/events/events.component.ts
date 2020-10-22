import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Events } from '../interfaces/events';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult = '';
  constructor(private eventService: EventService, private modalService: NgbModal) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  public async addEvent() {
    const newEvent = await this.eventService.addEvent(this.newEvent);
    this.events.push(newEvent);

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult;
    });
  }

  /*private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }*/

}
