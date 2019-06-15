import { FETCH_USERS, USER } from '../actions/types';

const initialState = {
    users: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        //case FETCH_USERS:
        //case NEW_POST:
        default: return state;
    }
}