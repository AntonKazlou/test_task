/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { LOAD_USERS_SUCCESS, LOAD_USERS, LOAD_USERS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  users: [],
  loading: false,
  loadingError: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return state.set('loading', true);
    case LOAD_USERS_SUCCESS:
      return state.set('users', action.users).set('loading', false);
    case LOAD_USERS_ERROR:
      return state
        .set('loadingError', action.loadingError)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
