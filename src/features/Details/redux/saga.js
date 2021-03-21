import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";

// action
import { GET_DETAILS, setDetails } from "./action";

function* getDetailsSaga({ url }) {
  const res = yield axios.get(`${url}`);

  if (res.status) {
    yield put(setDetails(res.data));
  } else {
    throw new Error(`HTTP error! status: ${res}`);
  }
}

export function* DetailsSaga() {
  yield all([takeLatest(GET_DETAILS, getDetailsSaga)]);
}
