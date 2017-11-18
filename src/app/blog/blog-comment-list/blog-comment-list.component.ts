import { Component, OnInit, Input } from '@angular/core';

import { BlogComment } from '../../models/comment';

@Component({
  selector: 'app-blog-comment-list',
  templateUrl: './blog-comment-list.component.html',
})
export class BlogCommentListComponent implements OnInit {

    @Input() comments: BlogComment[];

  constructor() { }

  ngOnInit() {
  }

}
