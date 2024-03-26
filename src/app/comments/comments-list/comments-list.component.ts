import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../core/services/comments/comments.service';
import { Observable } from 'rxjs';
import Comment from '../../core/models/comment.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent implements OnInit {
  @Input() postId!: number;
  comments$: Observable<Comment[]> | undefined;

  constructor(private commentService: CommentsService) {}

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.comments$ = this.commentService.onFetchComments(this.postId);
  }
}
