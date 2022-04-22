import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged$ = new BehaviorSubject(false);
  currentUser$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {
  }

  signUp(body){
    console.log(body);
    return this.http.post('http://localhost:4000/api/user/registration', body);
  }

  logIn(body) {
    return this.http.post('http://localhost:4000/api/user/login', body);
  }

  logOut() {
    console.log('LOG OUT');
    localStorage.setItem('id_token', '');
    this.isLogged$.next(false);
  }
}
