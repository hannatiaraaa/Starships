import { all, call, put, takeLatest } from "redux-saga/effects";

// api
import { request } from "../../../utils/api";
import { STARSHIPS } from "../../../utils/endPoint";

// action
import { GET_SEARCH, GET_STARSHIPS, setStarships } from "./action";

function* getStarshipsSaga({ page = 1 }) {
  const res = yield call(request, `${STARSHIPS}?page=${page}`, "GET");

  if (res.status) {
    yield put(
      setStarships(res.data.results, res.data.prevPage, res.data.nextPage)
    );
  } else {
    throw new Error(`HTTP error! status: ${res}`);
  }
}

function* getSearchSaga({ text }) {
  const res = yield call(request, `${STARSHIPS}?search=${text}`, "GET");

  if (res.status) {
    yield put(
      setStarships(res.data.results, res.data.prevPage, res.data.nextPage)
    );
  } else {
    throw new Error(`HTTP error! status: ${res}`);
  }
}

export function* HomeSaga() {
  yield all([
    takeLatest(GET_STARSHIPS, getStarshipsSaga),
    takeLatest(GET_SEARCH, getSearchSaga),
  ]);
}
