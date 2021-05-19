import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {NewsService} from '../news/news.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService, private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
  }

  createPost(postBody: any) {
    this.profileService.createPost(postBody).subscribe(res => {
      this.newsService.initAllPosts();
      this.router.navigate(['news']);
    });
  }
}
