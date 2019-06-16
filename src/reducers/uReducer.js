import { FETCH_USERS, USER_REPO, USER_INFO } from '../actions/types';

const initialState = {
    searched: [],
    repo: [],
    info: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                searched: action.payload
            };
        case USER_REPO:
            return {
                ...state,
                repo: action.payload
            }
        default: return state;
    }
}