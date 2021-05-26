import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Post } from '../../profile/profile.service';
import {Comment} from '../news.service';

export interface NewsState {
  allPosts: Post[];
  comments: Comment[];
}

export function createInitialState(): NewsState {
  return {
    allPosts: [],
    comments: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'news', resettable: true })
export class NewsStore extends Store<NewsState> {
  constructor() {
    super(createInitialState());
  }
}
