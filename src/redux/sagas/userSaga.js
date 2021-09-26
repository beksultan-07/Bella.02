import { put, takeEvery, call } from "redux-saga/effects";
import {
  USER_END,
  USER_FAILURE,
  USER_FETCH,
  USER_START,
  USER_SUCCESS,
} from "../actions/types";
import { setUser } from "../actions/user";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker() {
  try {
    yield put({ type: USER_START });

    const data = yield call(fetchUsersFromApi);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(setUser(json));

    yield put({ type: USER_SUCCESS });
  } catch (error) {
    yield put({ type: USER_FAILURE });
  }
  yield put({ type: USER_END });
}

export function* userWatcher() {
  yield takeEvery(USER_FETCH, fetchUserWorker);
}
