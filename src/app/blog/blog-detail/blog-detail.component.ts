import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Store } from '@ngrx/store';
import { DatePipe } from '@angular/common';

import { Post } from '../../models/post';
import { BlogComment } from '../../models/comment';

import * as PostActions from '../../state/actions/post.actions';
import * as fromRoot from '../../state/reducers';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {

    public post: Post;
    public comments: BlogComment[];

    constructor(
        private store: Store<fromRoot.State>,
        private activatedRoute: ActivatedRoute
    ) { 
		store.select(fromRoot.getDetail)
            .subscribe(post => {
                this.post = post;
            })
		store.select(fromRoot.getComments)
            .subscribe(comments => {
                this.comments = comments;
            })
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.store.dispatch(new PostActions.PostLoadDetail(params.id));;
            this.store.dispatch(new PostActions.CommentLoadList(params.id));;
        });
    }

}
