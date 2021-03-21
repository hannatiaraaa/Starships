import { all } from "redux-saga/effects";
import { HomeSaga } from "../features/Home/redux/saga";
import { DetailsSaga } from "../features/Details/redux/saga";

export function* SagaWatcher() {
  yield all([HomeSaga(), DetailsSaga()]);
}
