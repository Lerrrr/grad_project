import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {NewsStore} from './state/news.store';
import {NewsQuery} from './state/news.query';
import {Observable} from 'rxjs';

export interface PostDto {
  heading: string;
  description: string;
  img?: string;
  video?: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, private newsStore: NewsStore, private newsQuery: NewsQuery) { }

  get allPosts$() {
    return this.newsQuery.allPosts$;
  }

  async initAllPosts() {
    const allPosts = await this.fetchPostList()
      .pipe(take(1))
      .toPromise();
    this.newsStore.update({
      allPosts
    });
  }

  fetchPostList() {
    return this.http.get('http://localhost:4000/api/post') as Observable<any[]>;
  }

}
