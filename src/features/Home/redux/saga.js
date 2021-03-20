import { all, call, put, takeLatest } from "redux-saga/effects";

// api
import { request } from "../../../utils/api";
import { STARSHIPS } from "../../../utils/endPoint";

// action
import { GET_STARSHIPS, setStarships } from "./action";

function* getStarshipsSaga() {
  const res = yield call(request, `${STARSHIPS}`, "GET");

  if (res.status) {
    yield put(
      setStarships(res.data.results, res.data.prevPage, res.data.nectPage)
    );
  } else {
    throw new Error(`HTTP error! status: ${res}`);
  }
}

export function* HomeSaga() {
  yield all([takeLatest(GET_STARSHIPS, getStarshipsSaga)]);
}
