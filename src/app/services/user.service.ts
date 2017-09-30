import { Injectable } from '@angular/core';
import { User } from '../shared/model/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, RequestOptions } from '@angular/http';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {
  private subject = new BehaviorSubject(UNKNOWN_USER);
  
  user$: Observable<User> = this.subject.asObservable();

  constructor(private http: Http) {}

  login(email: string, password: string):Observable<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options: RequestOptions = new RequestOptions({headers})

    return this.http.post('/api/login', {email, password}, options)
      .map(res => res.json())
      .do(user => console.log(user))
      .do(user => this.subject.next(user))
      .publishLast().refCount();
  }

  logout() {
    this.subject.next(UNKNOWN_USER);
  }
}