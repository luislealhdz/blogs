import { Component, Input } from '@angular/core';
import Comment from '../../core/models/comment.interface';
import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CapitalizeFirstLetterPipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() comment!: Comment;
}
