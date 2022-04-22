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
      title: 'r/nhl',
      avatar: 'https://styles.redditmedia.com/t5_2qrrq/styles/communityIcon_eabmq6nbmf251.png?width=256&s=cc4898b9a97f015c38cb0fd07f56e5ad4fbd310a',
      orderNumber: 1
    },
    {
      title: 'r/khl',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/KHL_logo_shield_2016.svg/1200px-KHL_logo_shield_2016.svg.png',
      orderNumber: 2
    },
    {
      title: 'r/iihf',
      avatar: 'https://ocasia.org/media/sports/federations/logos/Logo-International-Ice-Hockey-Federation_173960002145.jpg',
      orderNumber: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
