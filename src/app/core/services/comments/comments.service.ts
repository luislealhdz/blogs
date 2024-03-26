import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Comment from '../../models/comment.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  onFetchComments(postId: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(environment.API_COMMENTS)
      .pipe(
        map(comments =>
          comments.filter(comment => comment.postId === Number(postId))
        )
      );
  }
}
