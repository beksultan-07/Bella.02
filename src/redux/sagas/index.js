import {all} from "redux-saga/effects"
import { userWatcher } from "./userSaga";

export default function* rootSaga() {
  yield all([userWatcher()]);
}
