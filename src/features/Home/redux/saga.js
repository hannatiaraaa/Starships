import { all, call, put, takeLatest } from "redux-saga/effects";
import { Store } from "../../../store/Store";

// api
import { request } from "../../../utils/api";
import { STARSHIPS } from "../../../utils/endPoint";

// action
import {
  GET_SEARCH,
  GET_STARSHIPS,
  GET_STARSHIPS_SEARCH,
  setAdditional,
  setStarships,
} from "./action";

function* getStarshipsSaga() {
  const { starships, nextPage } = Store.getState().HomeReducer;
  const res = yield call(request, `${STARSHIPS}?page=${nextPage}`, "GET");

  if (res.status) {
    if (starships.length !== res.data.count) {
      yield res.data.results.forEach((element) => {
        starships.push(element);
      });
      yield put(setAdditional());
      yield put(setStarships(starships));
    }
  } else {
    console.log("You have arrived on the last page");
  }
}
function* getStarshipsSearchSaga() {
  const res = yield call(request, `${STARSHIPS}`, "GET");

  if (res.status) {
    yield put(setStarships(res.data.results));
    yield put(setAdditional(2));
  } else {
    throw new Error(`HTTP error! status: ${res}`);
  }
}

function* getSearchSaga({ text }) {
  const res = yield call(request, `${STARSHIPS}?search=${text}`, "GET");

  if (res.status) {
    yield put(setStarships(res.data.results));
  }
}

export function* HomeSaga() {
  yield all([
    takeLatest(GET_STARSHIPS, getStarshipsSaga),
    takeLatest(GET_STARSHIPS_SEARCH, getStarshipsSearchSaga),
    takeLatest(GET_SEARCH, getSearchSaga),
  ]);
}
