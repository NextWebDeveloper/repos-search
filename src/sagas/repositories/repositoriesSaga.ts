import { all, put, takeLatest } from "redux-saga/effects";

import { LOAD_REPOSITORIES, Repository } from "@store/repositories/types";
import { setRepositories } from "@store/repositories/actions";

function* repositoriesSaga() {
  yield all([takeLatest(LOAD_REPOSITORIES, loadRepositories)]);
}

function* loadRepositories() {
  yield put(setRepositories({ loading: true, error: false }));
  try {
    const result = yield fetch("https://api.github.com/orgs/kraftvaerk/repos");
    const data = yield result.json();
    const sorted = data.sort((repoA: Repository, repoB: Repository) =>
      repoA.name.toLowerCase() > repoB.name.toLowerCase() ? 1 : -1
    );
    yield put(setRepositories({ loading: false, data: sorted, error: false }));
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
