import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from './global/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [{
    BgImage: 'https://i.pinimg.com/564x/0f/71/29/0f7129f5e563ec70cbc5c54ac26daedd.jpg'

  }];

  signModalState$ = new BehaviorSubject(null);

  constructor(private router: Router, private authService: AuthService) {
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
    this.authService.signUp(body).subscribe((res) => {
      console.log(res);
    },
      err => console.log(err)
    );
  }

  logoClickHandler() {
    this.router.navigate(['news']);
  }
}
