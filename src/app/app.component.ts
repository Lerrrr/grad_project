import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [{
    bgImage: 'https://wallpapershome.ru/images/pages/pic_h/6592.jpg',
    title: 'Test',
    description: 'Some of description dasdasd asd asda sda sda sdas das das das dasd asdas sad asdasd qwqad sdqwd asd aw das qwdqadaw',
    source: {
      avatar: 'https://www.1obl.ru/upload/medialibrary/04b/04b0534e588d53ba4aaf7f9edc00cbc2.png',
      name: 'Avatar pictures'
    }
  }];

  constructor(private router: Router) {
  }
  goToSignUp() {
    this.router.navigate([
      'sign-up'
    ]);
  }
}