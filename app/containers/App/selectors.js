/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectUsers = () =>
  createSelector(selectGlobal, globalState => globalState.get('users'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('loadingError'));

export { selectGlobal, makeSelectUsers, makeSelectLoading, makeSelectError };
