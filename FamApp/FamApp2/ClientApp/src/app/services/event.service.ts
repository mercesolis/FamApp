import { Injectable, Inject } from '@angular/core';
import { Events } from '../interfaces/events';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL')private baseUrl: string) { }

  public async getEvents(): Promise<Events[]> {
    return this.httpClient.get<Events[]>(`${this.baseUrl}events`).toPromise();
  }

  addEvent(newEvent: Events): Promise<Events[]> {
    return this.httpClient.get<Events[]>(`${this.baseUrl}newEvent`).toPromise();
  }
}
