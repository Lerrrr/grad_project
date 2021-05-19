import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  cards = [
    [
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test2',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test3',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test4',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
    ],

    [
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test5',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test6',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test7',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'Test8',
        description:
          'Description Description Description Description Description Description ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
    ],
  ];
  communities = [
    {
      communitiesAvatar:
        'https://i.pinimg.com/originals/16/bd/52/16bd524cb65c552e1ccbb9548296d2fa.png',
    },
  ];
  posts = [
    {
      userName: 'r/ тут в общем-то название сообщества',
      userAvatar: 'https://img.icons8.com/bubbles/2x/reddit.png',
    },
  ];

  news = [
    {
      headerBgImage:
        'https://cdn.theatlantic.com/thumbor/0RYdydg_fnJMAwo1V5I8_hzs3gI=/107x9:2007x999/960x500/media/img/mt/2019/02/PIA22093_hires-1/original.jpg',
    },
  ];

  allPosts$ = this.newsService.allPosts$.pipe(
    tap((v) => console.log('POSTS', v))
  );

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.initAllPosts();
  }
}
