/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_USERS } from 'containers/App/constants';
import {
  usersLoadingError,
  usersLoaded,
} from 'containers/App/actions';

import request from 'utils/request';

// need id some id to tasks

const tempData = [
  {
    firstName: 'Brus',
    lastName: 'Lee',
    age: 29,
    tasks: [
      {
        id: 1,
        title: 'Beat',
        description: 'Kick someone',
        score: 3.7,
      },
      {
        id: 11,
        title: 'Eat',
        description: 'eat food',
        score: 4.1,
      },
      {
        id: 111,
        title: 'Sleep',
        description: 'sleep about 8 hours',
        score: 4.9,
      },
      {
        id: 1111,
        title: 'Relax',
        description: 'fill good',
        score: 2.3,
      },
      {
        id: 11111,
        title: 'Work',
        description: 'Training a lot',
        score: 3,
      },
    ],
  },
  {
    firstName: 'Jackie',
    lastName: 'Chan',
    age: 35,
    tasks: [
      {
        id: 2,
        title: 'Beat',
        description: 'Kick someone',
        score: 3.4,
      },
      {
        id: 22,
        title: 'Eat',
        description: 'eat food',
        score: 4.0,
      },
      {
        id: 222,
        title: 'Sleep',
        description: 'sleep about 8 hours',
        score: 4.2,
      },
      {
        id: 2222,
        title: 'Relax',
        description: 'fill good',
        score: 3.7,
      },
      {
        id: 22222,
        title: 'Work',
        description: 'Training a lot',
        score: 4,
      },
    ],
  },
  {
    firstName: 'Sylvester',
    lastName: 'Stallone',
    age: 40,
    tasks: [
      {
        id: 3,
        title: 'Beat',
        description: 'Kick someone',
        score: 3.7,
      },
      {
        id: 33,
        title: 'Eat',
        description: 'eat food',
        score: 4.1,
      },
      {
        id: 333,
        title: 'Sleep',
        description: 'sleep about 8 hours',
        score: 4.9,
      },
      {
        id: 3333,
        title: 'Relax',
        description: 'fill good',
        score: 2.3,
      },
      {
        id: 33333,
        title: 'Work',
        description: 'Training a lot',
        score: 3,
      },
    ],
  },
  {
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
    age: 23,
    tasks: [
      {
        id: 4,
        title: 'Beat',
        description: 'Kick someone',
        score: 3.7,
      },
      {
        id: 44,
        title: 'Eat',
        description: 'eat food',
        score: 4.11,
      },
      {
        id: 444,
        title: 'Sleep',
        description: 'sleep about 8 hours',
        score: 4.9,
      },
      {
        id: 4444,
        title: 'Relax',
        description: 'fill good',
        score: 2.33,
      },
      {
        id: 44444,
        title: 'Work',
        description: 'Training a lot',
        score: 3,
      },
    ],
  },
  {
    firstName: 'Chuck',
    lastName: 'Norris',
    age: 30,
    tasks: [
      {
        id: 5,
        title: 'Beat',
        description: 'Kick someone',
        score: 3.7,
      },
      {
        id: 55,
        title: 'Eat',
        description: 'eat foot',
        score: 4.1,
      },
      {
        id: 555,
        title: 'Sleep',
        description: 'sleep about 8 hours',
        score: 4.9,
      },
      {
        id: 5555,
        title: 'Relax',
        description: 'fill good',
        score: 2.3,
      },
      {
        id: 55555,
        title: 'Work',
        description: 'Training a lot',
        score: 3,
      },
    ],
  },
];

function getData() {
  return new Promise(resolve => setTimeout(() => resolve(tempData), 2000));
}

export function* getUsersList() {
  // const requestURL = ``;

  try {
    // const usersList = yield call(request, requestURL);
    const usersList = yield call(getData);
    yield put(usersLoaded(usersList));
  } catch (err) {
    yield put(usersLoadingError(err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadData() {
  yield takeLatest(LOAD_USERS, getUsersList);
}
