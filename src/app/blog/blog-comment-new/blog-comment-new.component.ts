import { Component, OnInit, Input } from '@angular/core';
import {
        FormGroup, FormControl, NgForm, FormBuilder,
        Validators, AbstractControl, ValidatorFn
    } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BlogComment } from '../../models/comment';
import { Post } from '../../models/post';

import * as PostActions from '../../state/actions/post.actions';
import * as fromRoot from '../../state/reducers';


@Component({
  selector: 'app-blog-comment-new',
  templateUrl: './blog-comment-new.component.html',
})
export class BlogCommentNewComponent implements OnInit {

	@Input() post: Post;
	public comment: BlogComment;
	public commentForm: FormGroup;

    constructor(
        private store: Store<fromRoot.State>,
        private formBuilder: FormBuilder,
    ){
	}

    ngOnInit() {
        this.comment  = {
            date: String((new Date()).getFullYear())+"-"+String((new Date()).getMonth()+1)+"-"+String((new Date()).getDate()),
            user: "",
            content: "",
            postId: this.post.id,
            parent_id: null,
        };
        this.commentForm = this.formBuilder.group({
            'user': [this.comment.user, [Validators.required]],
            'content': [this.comment.content, [Validators.required]],
        });
    }

    public save(f: NgForm) {
        if (!f.valid) { return false; }
        var newComment = {...this.comment}
        for (var k in f.value){
            newComment[k] = f.value[k];
        };
        this.store.dispatch(new PostActions.CommentAdd(newComment));
    }

}
