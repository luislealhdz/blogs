import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../../core/models/post.interface';
import { PostsService } from '../../core/services/posts/posts.service';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-random-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './random-posts.component.html',
  styleUrl: './random-posts.component.scss'
})
export class RandomPostsComponent implements OnInit {
  @Input() postId!: number;
  posts$: Observable<Post[]> | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchRandomPosts();
  }

  fetchRandomPosts(): void {
    this.posts$ = this.postsService.getRandomPosts(this.postId);
  }
}
