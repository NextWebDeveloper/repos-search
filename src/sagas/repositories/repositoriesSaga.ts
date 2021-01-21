import { all, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_REPOSITORIES,
  LoadRepositoriesAction,
} from "@store/repositories/types";
import { setRepositories } from "@store/repositories/actions";

function* repositoriesSaga() {
  yield all([takeLatest(LOAD_REPOSITORIES, loadRepositories)]);
}

function* loadRepositories(action: LoadRepositoriesAction) {
  yield put(setRepositories({ loading: true, error: false }));
  try {
    const result = yield fetch(
      `https://api.github.com/search/repositories?q=${action.search}%20in:name+org:kraftvaerk&` +
        new URLSearchParams({
          //Search results should be sorted alphabetically in an ascending order
          sort: "name",
        })
    );
    const data = yield result.json();
    yield put(
      setRepositories({ loading: false, data: data.items, error: false })
    );
  } catch (e) {
    yield put(
      setRepositories({
        loading: false,
        data: null,
        error: true,
      })
    );
  }
}

export default repositoriesSaga;
