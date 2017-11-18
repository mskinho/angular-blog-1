import { Component, Input } from '@angular/core';

import { BlogComment } from '../../models/comment';
import { Post } from '../../models/post';

@Component({
  selector: 'app-blog-comment-detail',
  templateUrl: './blog-comment-detail.component.html',
})
export class BlogCommentDetailComponent {

    @Input() commentList: BlogComment[];
    @Input() comment: BlogComment;
    @Input() post: Post;
    public reply: boolean = false;

    constructor() { }

}
