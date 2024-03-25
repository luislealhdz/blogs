import { Component, OnInit, inject } from '@angular/core';
import { PostsService } from '../../core/services/posts.service';
import Post from '../../core/models/post';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  postsList!: Post[];

  postsService = inject(PostsService);

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.onFetchPosts<Post>().subscribe(post => {
      this.postsList = post;
    });
  }
}
