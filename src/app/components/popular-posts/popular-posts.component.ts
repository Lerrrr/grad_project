import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.scss']
})

export class PopularPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
