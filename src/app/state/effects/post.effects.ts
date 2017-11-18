import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as Globals from '../../globals';
import * as PostActions from "../actions/post.actions";
import * as ErrorActions from "../actions/error.actions";

@Injectable()
export class PostEffects {

    constructor(
        private action$: Actions,
        private http: Http,
    ) {}

	private url = Globals.url;

    @Effect() loadposts$: Observable<Action> = this.action$.ofType<PostActions.PostLoadList>(PostActions.POST_LOAD_LIST)
        .mergeMap(() => this.http.get(this.url + '/posts')
            .map(res => {
                return new PostActions.PostListSuccess(res.json());
            })
            .catch(err => of(new ErrorActions.ServerFailure(err)))
        );

    @Effect() loadpostdetail$: Observable<Action> = this.action$.ofType<PostActions.PostLoadDetail>(PostActions.POST_LOAD_DETAIL)
        .map(action => action.payload)
        .mergeMap(payload => this.http.get(this.url + '/posts/' + payload)
            .map(res => {
                return new PostActions.PostDetailSuccess(res.json());
            })
            .catch(err => of(new ErrorActions.ServerFailure(err)))
        );

    @Effect() loadpostcomment$: Observable<Action> = this.action$.ofType<PostActions.CommentLoadList>(PostActions.COMMENT_LOAD_LIST)
        .map(action => action.payload)
        .mergeMap(payload => this.http.get(this.url + '/posts/' + payload + '/comments')
            .map(res => {
                return new PostActions.CommentListSuccess(res.json());
            })
            .catch(err => of(new ErrorActions.ServerFailure(err)))
        );

    @Effect() addpostcomment$: Observable<Action> = this.action$.ofType<PostActions.CommentAdd>(PostActions.COMMENT_ADD)
        .map(action => action.payload)
        .mergeMap(payload => this.http.post(this.url + '/posts/' + payload.postId + '/comments', payload)
            .map(res => {
                let data = res.json();
                return new PostActions.CommentLoadList(data.postId);
            })
            .catch(err => of(new ErrorActions.ServerFailure(err)))
        );

}
