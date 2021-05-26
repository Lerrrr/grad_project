import { getSupportedInputTypes } from '@angular/cdk/platform';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.scss']
})

export class PopularPostsComponent implements OnInit {

  @Input() type: 'new' | 'hot';
  @Output() typeChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
