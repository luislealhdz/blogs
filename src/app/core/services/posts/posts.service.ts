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

  getRandomPosts(excludeIdPost: number): Observable<Post[]> {
    const totalPosts: number = 10;

    return this.http.get<Post[]>(environment.API_POSTS).pipe(
      map(posts => posts.filter(post => post.id !== excludeIdPost)),
      map(posts => this.shufflePosts(posts).slice(0, totalPosts))
    );
  }

  private shufflePosts(postsList: Post[]): Post[] {
    let currentIndex: number = postsList.length;
    let randomIndex: number = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [postsList[currentIndex], postsList[randomIndex]] = [
        postsList[randomIndex],
        postsList[currentIndex]
      ];
    }

    return postsList;
  }
}
