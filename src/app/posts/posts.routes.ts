import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: ':id',
    component: PostsDetailComponent
  }
];
