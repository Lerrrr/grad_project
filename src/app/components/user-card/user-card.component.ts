import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userBgImage;
  @Input() profileUserName;

  constructor() { }

  ngOnInit(): void {
  }

}
