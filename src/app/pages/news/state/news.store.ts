import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Post} from '../../profile/profile.service';

export interface NewsState {
  allPosts: Post[];
}

export function createInitialState(): NewsState {
  return {
    allPosts: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'news', resettable: true })
export class NewsStore extends Store<NewsState> {
  constructor() {
    super(createInitialState());
  }
}
