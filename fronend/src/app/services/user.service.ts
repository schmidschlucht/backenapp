import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  allUser(): Observable<User[]> {
    return this.httpClient.get('/api/users') as Observable<User[]>;
  }
}

export interface User {
  user_id: number
  user_firstname: string
  user_lastname: string
  user_email: string
  updated_at: string
  created_at: string
}
