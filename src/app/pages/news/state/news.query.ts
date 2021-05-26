import { Injectable } from '@angular/core';
import { filterNil, isNil, Query } from '@datorama/akita';
import { NewsStore, NewsState } from './news.store';

@Injectable({ providedIn: 'root' })
export class NewsQuery extends Query<NewsState> {

  allPosts$ = this.select('allPosts').pipe(filterNil);
  comments$ = this.select('comments').pipe(filterNil);


  constructor(protected store: NewsStore) {
    super(store);
  }
}
