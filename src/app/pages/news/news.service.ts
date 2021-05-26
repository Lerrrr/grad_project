import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {NewsStore} from './state/news.store';
import {NewsQuery} from './state/news.query';
import {Observable, of} from 'rxjs';

export interface PostDto {
  heading: string;
  description: string;
  img?: string;
  video?: string;
}

export interface Comment {
  id: number;
  text: string;
  userId: number;
  postId: number;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, private newsStore: NewsStore, private newsQuery: NewsQuery) { }

  get allPosts$() {
    return this.newsQuery.allPosts$;
  }
  get comment$() {
    return this.newsQuery.comments$;
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

  async initComments() {
    const comments = await this.fetchComments()
      .pipe(take(1))
      .toPromise();
    this.newsStore.update({
      comments
    });
  }

  fetchComments() {
    // return of([
    //   {
    //     id: 1,
    //     text: 'commtn',
    //     postId: 18,
    //     userId: 5,
    //     createdAt: ' 20 May 21',
    //     updatedAt: ' 20 May 21'
    //   }
    // ]);
    return this.http.get('http://localhost:4000/api/post/comment/') as Observable<any[]>;
  }


  sendComment(data: {
    text: string;
    userId: string;
    postId: string;
  }){
    return this.http.post(`http://localhost:4000/api/post/comment/${data.postId}`, {text: data.text});
  }

  upVotePost( postId, user: {
    id: number;
  }) {
    return this.http.post(`http://localhost:4000/api/post/rate/up/${postId}`, {user});
  }

}
