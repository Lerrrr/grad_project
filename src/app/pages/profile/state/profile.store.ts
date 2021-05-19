import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ProfileState {
  usersPostsList: any[];
}

export function createInitialState(): ProfileState {
  return {
    usersPostsList: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'profile', resettable: true })
export class ProfileStore extends Store<ProfileState> {
  constructor() {
    super(createInitialState());
  }
}
