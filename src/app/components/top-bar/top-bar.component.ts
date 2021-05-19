import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

  @Input() isLogged;

  @Output() signUpClick = new EventEmitter();
  @Output() logoClick = new EventEmitter();
  @Output() logInClick = new EventEmitter();
  @Output() profileClick = new EventEmitter();
  @Output() logoutClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
