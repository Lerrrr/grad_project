import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { NewsStore } from './state/news.store';
import { AuthService } from '../../global/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  cards = [
    [
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/w/i/chto-tvorilos-posle-sensacionnoj-pobedy-britancev_1622066612809829235.jpg',
        title: 'IIHF',
        description: ' Победа британцев над Беларусью',
        source: {
          avatar:
            'https://styles.redditmedia.com/t5_b6w04/styles/profileIcon_snoo2b6ee233-9851-40ce-9865-0f1359b990bb-headshot.png?width=256&height=256&crop=256:256,smart&s=ef52eadb99c02cd58959bd70a76a3853b9c42c51',
          name: 'u/Lera',
        },
      },
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/v/i/istoriya-vzlyota-sergeya-tolchinskogo_16218506781946422445.jpg',
        title: 'КХЛ',
        description: 'Сергей Толчинский - самый обсуждаемый игрок межсезонья',
        source: {
          avatar:
            'https://preview.redd.it/nngdxf84vdxy.png?auto=webp&s=904d16939a455032cb772b6704b075e1d84791bd',
          name: 'u/Nens',
        },
      },
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/b/y/kakih-transferov-zhdut-v-khl_1620563047364401814.jpg',
        title: 'КХЛ',
        description: 'Главные сделки КХЛ, которых ждут в ближайшее время ',
        source: {
          avatar: 'http://i.imgur.com/xK2JB4E.jpg',
          name: 'u/HockeyforL',
        },
      },
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/m/w/vegas-minnesota-2-4_16219216741254900752.jpg',
        title: 'НХЛ',
        description: 'Первый гол Капризова в НХЛ! И п  роигрыш "Миннесоты"',
        source: {
          avatar: 'https://i.redd.it/np68b2dqj1w51.png',
          name: 'u/Seiim',
        },
      },
    ],

    [
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/o/z/kucherov-nabral-100-ochkov-v-plej-off-nhl_16215684113919954.jpg',
        title: 'НХЛ',
        description: 'Никита Кучеров выбил 100 очков в плей-офф НХЛ ',
        source: {
          avatar:
            'https://styles.redditmedia.com/t5_1nfsgz/styles/profileIcon_snoo0aa9ffbb-8e19-4c75-9b56-7c1916d44175-headshot.png?width=256&height=256&crop=256:256,smart&s=4791b120572b768b2478b65095634a434da87f77',
          name: 'u/MembersHock',
        },
      },
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/u/b/kanada-latviya-0-2_1621626925187639685.jpg',
        title: 'IIHF',
        description:
          'Латвия во главе с Бобом Хартли одержади невероятную победу над Канадцами! ',
        source: {
          avatar:
            'https://styles.redditmedia.com/t5_vgdaa/styles/profileIcon_snoo62dfff0b-27a7-4e16-a0a8-1f84f4f7b369-headshot.png?width=256&height=256&crop=256:256,smart&s=67b7f2bc0147c625c8de55fa742da2b08e19038a',
          name: 'u/IHateHockey',
        },
      },
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/z/d/finny-chempiony-mira-po-hokkeju_1558903006668271229.jpg',
        title: 'IIHF',
        description: 'Сборная Финландяии одержала волевую победу над Норвегией',
        source: {
          avatar:
            'https://styles.redditmedia.com/t5_1ik5ku/styles/profileIcon_snoo1f6d4eb8-e7cf-48c9-a8b4-0b6207a69dce-headshot.png?width=256&height=256&crop=256:256,smart&s=a09f4bd924e8b3b9dcff0424100e131abfe3070a',
          name: 'u/PoopIt',
        },
      },
      {
        bgImage:
          'https://img.championat.com/s/735x490/news/big/w/w/kto-namazal-maslom-klyushku-askarova_16098603581497880622.jpg',
        title: 'U18',
        description: 'ЮЧМ даты проведения 27.04.21 - 07.05.2021 ',
        source: {
          avatar:
            'https://styles.redditmedia.com/t5_xiw7f/styles/profileIcon_snooe80130ea-637c-4e15-a035-10fa33f23370-headshot.png?width=256&height=256&crop=256:256,smart&s=12326346abe4b0d36ef7d9243bd01bd963d78921',
          name: 'u/NothingElse',
        },
      },
    ],
  ];
  communities = [
    {
      communitiesAvatar:
        'https://b.thumbs.redditmedia.com/nxQ-psubRLY5ezuB0NRJEkQri3toYJMCt9AtDtBeqJE.png',
      communitiesName: 'Anaheim Ducks'
    },

  ];
  posts = [
    {
      userName: 'r/ userName',
      userAvatar: 'https://img.icons8.com/bubbles/2x/reddit.png',
    },
  ];

  news = [
    {
      headerBgImage:
        'https://m.media-amazon.com/images/I/61lo8QevtJL._AC_SL1468_.jpg',
    },
  ];

  inform = [
    {
      InfoBgImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCgtb6TG1pTcE62RSXvKvv3BT95jberHs5w&usqp=CAU',
    },
  ];

  isLogged$ = this.auth.isLogged$;

  selectedNewsType$: BehaviorSubject<'new' | 'hot'> = new BehaviorSubject(
    'new'
  );

  allPosts$ = combineLatest([
    this.newsService.allPosts$,
    this.selectedNewsType$.asObservable(),
  ]).pipe(
    map(([allPosts, newsType]) => {
      if (newsType === 'new') {
        return allPosts.sort((a, b) => {
          return a.createdAt > b.createdAt ? -1 : 1;
        });
      } else if (newsType === 'hot') {
        return allPosts.sort((a, b) => {
          return a.rating > b.rating ? -1 : 1;
        });
      } else {
        return allPosts;
      }
    })
  );

  constructor(
    private newsService: NewsService,
    private newsStore: NewsStore,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.initAllPosts();
    // this.newsService.initComments();
  }

  sendComment(text, userId, postId) {
    this.newsService
      .sendComment({
        text,
        postId,
        userId,
      })
      .subscribe(() => {
        this.newsService.initAllPosts();
      });
  }
  trackByFn(index, card) {
    return card.id;
  }

  upVote(userId, postId, postsList?) {
    this.newsService.upVotePost(
      postId, {id: userId}
    ).subscribe(() => {
      this.newsService.initAllPosts();
    });
  }

  downVote(userId, postId, postsList?) {
    this.newsService.downVotePost(
      postId, {id: userId}
    ).subscribe(() => {
      this.newsService.initAllPosts();
    });
  }
  goToProfile() {
    this.router.navigate([
      'profile'
    ]);
  }
}










// const allPosts = postsList.map((post) => {
//   return {
//     ...post,
//     rating: post.id === postId ? post.rating + 1 : post.rating,
//   };
// });
// this.newsStore.update({
//   allPosts,
// });
