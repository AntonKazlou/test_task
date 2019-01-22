import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from '../constants';

import { loadUsers, usersLoaded, usersLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadUsers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_USERS,
      };

      expect(loadUsers()).toEqual(expectedResult);
    });
  });

  describe('usersLoaded', () => {
    it('should return the array', () => {
      const arr = [];
      const expectedResult = {
        type: LOAD_USERS_SUCCESS,
        repos: arr,
      };

      expect(usersLoaded(arr)).toEqual(expectedResult);
    });
  });

  describe('usersLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_USERS_ERROR,
        error: fixture,
      };

      expect(usersLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
