import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostDto} from '../news/news.service';

export interface Post {
  createdAt: string;
  description: string;
  heading: string;
  id: number;
  img: string;
  rating: number;
  updatedAt: string;
  userId: number;
  video: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  createPost(body: PostDto){
    const token = localStorage.getItem('id_token');
    return this.http.post('http://localhost:4000/api/post', body, {
      headers: {
        Authorization:
          'Bearer ' + token
      }
    });
  }
}
