import { FETCH_USERS, USER } from './types';

export const fetchUsers = (searchQ) => dispatch => {
    fetch(`https://api.github.com/search/users?q=${searchQ}`)
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users.items
        }));
        //console.log(searchQ);
}

export const IndiUser = (username) => dispatch => {
    
}