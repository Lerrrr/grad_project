import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userBgImage;
  @Input() profileUserName;
  @Output() logoClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
