import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPost from "./post.reducer";

export interface State {
    post: fromPost.State;
}

export const reducers: ActionReducerMap<State> = {
    post: fromPost.reducer,
}

export const getPostState = (state: State) => state.post;

export const getList = createSelector(
    getPostState,
    fromPost.getList
);

export const getDetail = createSelector(
    getPostState,
    fromPost.getDetail
);

export const getComments = createSelector(
    getPostState,
    fromPost.getComments
);

