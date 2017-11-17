import { Action } from '@ngrx/store';

// In a live application these actions would need to create an error message
// Going to leave as an empty action in demo

export const SERVER_FAILURE = 'SERVER_FAILURE';

export class ServerFailure implements Action {
    readonly type = SERVER_FAILURE;
    constructor(public payload) {}
}

export type Actions =
    ServerFailure;
