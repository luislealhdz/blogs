import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/posts/posts.service';
import Post from '../../core/models/post.interface';
import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';
import { Observable } from 'rxjs';
import User from '../../core/models/user.interface';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from '../../comments/comments-list/comments-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { RandomPostsComponent } from '../random-posts/random-posts.component';

@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [
    CapitalizeFirstLetterPipe,
    CommonModule,
    CommentsListComponent,
    RandomPostsComponent
  ],
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.scss'
})
export class PostsDetailComponent implements OnInit {
  @Input('id') postId!: number;
  post$: Observable<{ post: Post; user: Partial<User> }> | undefined;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.post$ = this.postService.onFetchPostDetails(this.postId);
  }
}
