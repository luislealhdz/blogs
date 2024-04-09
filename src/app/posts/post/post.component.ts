import { Component, Input } from '@angular/core';
import Post from '../../core/models/post.interface';
import { RouterModule } from '@angular/router';
import { CapitalizeFirstLetterPipe } from '../../core/pipes/capitalize-first-letter.pipe';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule, CapitalizeFirstLetterPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post!: Post;
}
