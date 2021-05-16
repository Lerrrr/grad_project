import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

  @Output() signUpClick = new EventEmitter();
  @Output() logInClick = new EventEmitter();
  @Output() profileClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
