import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DatePipe } from '@angular/common';

import { Post } from '../../models/post';

import * as PostActions from '../../state/actions/post.actions';
import * as fromRoot from '../../state/reducers';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    pipes: [DatePipe]
})
export class BlogListComponent implements OnInit {

    private posts: Post[];

    constructor(
        private store: Store<fromRoot.State>,
    ) { 
        store.select(fromRoot.getList)
            .subscribe(posts => {
                this.posts = posts;
            })
    }

    ngOnInit() {
        this.store.dispatch(new PostActions.PostLoadList());
        /* Remove the post detail so it's empty when loading detail view */
        this.store.dispatch(new PostActions.PostClearDetail());
    }

}
