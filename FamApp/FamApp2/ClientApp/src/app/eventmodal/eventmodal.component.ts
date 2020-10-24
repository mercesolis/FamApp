import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Events } from '../interfaces/events';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-eventmodal',
  templateUrl: './eventmodal.component.html',
  styleUrls: ['./eventmodal.component.css']
})
export class EventmodalComponent implements OnInit {

  public newEvent: Events = {
    id: undefined,
    title: '',
    start: null,
    description: '',
  };

  modalInstance;

  constructor(private eventService: EventService, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  async yes() {
    await this.eventService.addEvent(this.newEvent);
    this.modalInstance.close('yes');
    
    }

  


  close () {
    this.modalInstance.close('no');
  }
}

