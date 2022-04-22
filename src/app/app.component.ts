import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from './global/auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users = [{
    BgImage: 'https://i.pinimg.com/564x/0f/71/29/0f7129f5e563ec70cbc5c54ac26daedd.jpg'

  }];

  signModalState$ = new BehaviorSubject(null);

  isLogged$ = this.authService.isLogged$.asObservable().pipe(tap(v => console.log('IS LOGGED', v)));

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isLogged$.next(localStorage.getItem('id_token') !== '');
  }

  goToSignUp() {
    // this.router.navigate([
    //   'sign-up'
    // ]);
    this.signModalState$.next('sign-up');
  }

  goToProfile() {
    this.router.navigate([
      'profile'
    ]);
  }

  signUpHandler(body: any) {
    this.authService.signUp(body).subscribe((res: any) => {
      localStorage.setItem('id_token', res.token);
      this.authService.isLogged$.next(true);
      this.signModalState$.next(null);
      },
      err => console.log(err)
    );
  }

  logIn(body: any) {
    this.authService.logIn(body).subscribe((res: any) => {
      localStorage.setItem('id_token', res.token);
      localStorage.setItem('userName', body.name);
      console.log(body.name);
      this.authService.isLogged$.next(true);
      this.signModalState$.next(null);
    },
      err => console.log(err)
    );
  }

  logoClickHandler() {
    this.router.navigate(['news']);
  }
  logoutClick(){
    this.authService.logOut();
  }
}
