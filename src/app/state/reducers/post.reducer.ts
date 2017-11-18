import { Action } from '@ngrx/store';

import { BlogComment } from "../../models/comment";
import { Post } from "../../models/post";
import * as PostActions from "../actions/post.actions";

export interface State {
    list: Post[];
    detail: Post;
    comments: BlogComment[];
}

const initialState: State = {
    list: [],
    detail: undefined,
    comments: []
};

export function reducer(state = initialState, action: PostActions.Actions): State {
    switch (action.type) {
        case PostActions.POST_LIST_SUCCESS: {
            return {
                list: action.payload,
                detail: state.detail,
                comments: state.comments,
            };
        }
        case PostActions.POST_CLEAR_DETAIL: {
            return {
                list: state.list,
                detail: undefined,
                comments: [],
            };
        }
        case PostActions.POST_DETAIL_SUCCESS: {
            return {
                list: state.list,
                detail: action.payload,
                comments: state.comments,
            };
        }
        case PostActions.COMMENT_LIST_SUCCESS: {
            return {
                list: state.list,
                detail: state.detail,
                comments: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export const getList = (state: State) => state.list;
export const getDetail = (state: State) => state.detail;
export const getComments = (state: State) => state.comments;

