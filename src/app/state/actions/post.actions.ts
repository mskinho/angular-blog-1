import { Action } from '@ngrx/store';

export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LOAD_LIST = 'POST_LOAD_LIST';
export const POST_DETAIL_SUCCESS = 'POST_DETAIL_SUCCESS';
export const POST_LOAD_DETAIL = 'POST_LOAD_DETAIL';
export const COMMENT_LIST_SUCCESS = 'COMMENT_LIST_SUCCESS';
export const COMMENT_LOAD_LIST = 'COMMENT_LOAD_LIST';
export const COMMENT_ADD = 'COMMENT_ADD';

export class PostListSuccess implements Action {
    readonly type = POST_LIST_SUCCESS;
    constructor(public payload) {}
}

export class PostLoadList implements Action {
    readonly type = POST_LOAD_LIST;
}

export class PostDetailSuccess implements Action {
    readonly type = POST_DETAIL_SUCCESS;
    constructor(public payload) {}
}

export class PostLoadDetail implements Action {
    readonly type = POST_LOAD_DETAIL;
    constructor(public payload) {}
}

export class CommentListSuccess implements Action {
    readonly type = COMMENT_LIST_SUCCESS;
    constructor(public payload) {}
}

export class CommentLoadList implements Action {
    readonly type = COMMENT_LOAD_LIST;
    constructor(public payload) {}
}

export class CommentAdd implements Action {
    readonly type = COMMENT_ADD;
    constructor(public payload) {}
}

export type Actions =
    PostListSuccess |
    PostLoadList |
    PostDetailSuccess |
    PostLoadDetail |
    CommentListSuccess |
    CommentLoadList |
    CommentAdd;
