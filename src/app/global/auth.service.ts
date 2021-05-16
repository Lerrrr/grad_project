import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(body){
    console.log(body);
    return this.http.post('localhost:4000/api/user/registration', body);
  }
}
