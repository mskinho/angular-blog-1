import { Component, OnInit, Input } from '@angular/core';

import { BlogComment } from '../../models/comment';
import { Post } from '../../models/post';

@Component({
  selector: 'app-blog-comment-list',
  templateUrl: './blog-comment-list.component.html',
})
export class BlogCommentListComponent implements OnInit {

    @Input() comments: BlogComment[];
    @Input() parentId: any = null;
    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }

}
