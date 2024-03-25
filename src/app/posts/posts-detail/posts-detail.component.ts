import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/posts.service';
import Post from '../../core/models/post';
import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';

@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [CapitalizeFirstLetterPipe],
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.scss'
})
export class PostsDetailComponent implements OnInit {
  @Input('id') postId!: string;
  post!: Post;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService
      .onFetchPostDetails<Post>(this.postId)
      .subscribe(post => (this.post = post));
  }
}
