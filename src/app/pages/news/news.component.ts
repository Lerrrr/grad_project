import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest} from 'rxjs';

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
        title: 'IIHF',
        description:
          ' Первая победа Швеции на чемпионате мира',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'КХЛ',
        description:
          'Сергей Толчинский - самый обсуждаемый игрок межсезонья',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'КХЛ',
        description:
          'Главные сделки КХЛ, которых ждут в ближайшее время ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'НХЛ',
        description:
          'Первый гол Капризова в НХЛ! И п  роигрыш "Миннесоты"',
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
        title: 'НХЛ',
        description:
          'Никита Кучеров выбил 100 очков в плей-офф НХЛ ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'IIHF',
        description:
          'Дания одержала победу над Великобританией в овертайме ',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'IIHF',
        description:
          'Сборная Финландяии одержала волевую победу над Норвегией',
        source: {
          avatar:
            'https://www.pinclipart.com/picdir/middle/116-1168646_well-i-tried-to-make-my-avatar-to.png',
          name: 'Lera',
        },
      },
      {
        bgImage: 'https://i.redd.it/mdvmefeejg331.jpg',
        title: 'U18',
        description:
          'ЮЧМ даты проведения 27.04.21 - 07.05.2021 ',
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

  selectedNewsType$: BehaviorSubject<'new' | 'hot'> = new BehaviorSubject('hot');
  allPosts$ = combineLatest([this.newsService.allPosts$, this.newsService.comment$, this.selectedNewsType$.asObservable()]).pipe(
    map(([allPosts, comments, newsType]) => {
      const performedPosts = allPosts.map(post => {
        post.comments = comments.filter(comment => comment.postId === post.id);
        return post;
      });
      if ( newsType === 'new' ) {
        return allPosts.sort((a, b) => {
         return a.createdAt > b.createdAt ? -1 : 1;
        });
      } else {
        return allPosts;
      }
    })
  );

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.initAllPosts();
    this.newsService.initComments();
  }


  sendComment(text, userId, postId) {
    this.newsService.sendComment({
     text, postId, userId
    }).subscribe(() => {
      this.newsService.initComments();
    });
  }
  trackByFn(index, card){
    return card.id;
  }

  upVote(userId, postId) {
    this.newsService.upVotePost(
      postId, {id: userId}
    ).subscribe(() => {
      this.newsService.initAllPosts();
    });
  }
}
