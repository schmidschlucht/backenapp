import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  allUser(): Observable<User[]> {
    return this.httpClient.get('/api/user')
      .pipe(
    // @ts-ignore
        catchError((httpErrorResponse: HttpErrorResponse) => {
          return throwError(() => new Error('User konnten nicht geladen werden.'));
        })
      );
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
