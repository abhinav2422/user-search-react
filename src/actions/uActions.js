import { FETCH_USERS, USER_REPO, USER_INFO } from './types';

export const fetchUsers = (searchQ) => dispatch => {
    fetch(`https://api.github.com/search/users?q=${searchQ}`)
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users.items
        }));
        //console.log(searchQ);
}

export const fetchRepos = (username) => dispatch => {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(repos => dispatch({
            type: USER_REPO,
            payload: repos
        }));
}