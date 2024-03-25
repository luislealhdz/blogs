import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  onFetchPosts<Post>(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_POSTS);
  }

  onFetchPostDetails<Post>(postId: string): Observable<Post> {
    return this.http.get<Post>(environment.API_POSTS + `/${postId}`);
  }
}
