import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { DbzMembers } from '../interfaces/dbz-member';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL')private baseUrl: string) { }

  public async getMembers(): Promise<DbzMembers[]> {
    return this.httpClient.get<DbzMembers[]>(`${this.baseUrl}dbzmembers`).toPromise();
  }

  public async addMember(member: DbzMembers): Promise<DbzMembers> {
    return this.httpClient.post<DbzMembers>(`${this.baseUrl}dbzmembers`, member).toPromise();
  }
}
