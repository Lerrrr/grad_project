import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() signUpClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
