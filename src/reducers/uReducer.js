import { FETCH_USERS, USER } from '../actions/types';

const initialState = {
    searched: [],
    particular: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                searched: action.payload
            };
        //case NEW_POST:
        default: return state;
    }
}