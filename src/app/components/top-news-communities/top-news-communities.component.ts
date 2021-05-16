import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-top-news-communities',
  templateUrl: './top-news-communities.component.html',
  styleUrls: ['./top-news-communities.component.scss']
})

export class TopNewsCommunitiesComponent implements OnInit {
  @Input() headerBgImage;
 
  @Input() news = [
    {
      title: 'Title',
      avatar: 'https://img.icons8.com/plasticine/2x/reddit.png',
      orderNumber: 1
    }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}