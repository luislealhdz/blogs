import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import User from '../../models/user.interface';
import Post from '../../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  onFetchPosts<Post>(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_POSTS);
  }

  onFetchPostDetails(
    postId: number
  ): Observable<{ post: Post; user: Partial<User> }> {
    return this.http.get<Post>(environment.API_POSTS + `/${postId}`).pipe(
      mergeMap((post: Post) => {
        return this.http
          .get<User>(environment.API_USERS + `/${post.userId}`)
          .pipe(
            map((user: User) => {
              return {
                post,
                user: {
                  id: user.id,
                  username: user.name
                }
              };
            })
          );
      })
    );
  }
}
