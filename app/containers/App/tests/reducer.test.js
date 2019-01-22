import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { loadUsers, usersLoaded, usersLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      loadingError: '',
      users: [],
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadUsers action correctly', () => {
    const expectedResult = state.set('loading', true);

    expect(appReducer(state, loadUsers())).toEqual(expectedResult);
  });

  it('should handle the usersLoaded action correctly', () => {
    const fixture = [
      {
        user: 'Hi',
      },
    ];
    const expectedResult = state.set('users', fixture).set('loading', false);

    expect(appReducer(state, usersLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the usersLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, usersLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
