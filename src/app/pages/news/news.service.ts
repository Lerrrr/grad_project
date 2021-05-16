import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  createPost(body: PostDto){
    return this.http.post('localhost:4000/api/post', body);
  }

}
