// Core
import { all } from "redux-saga/effects";

import repositoriesSaga from "./repositories/repositoriesSaga";

function* rootSaga() {
  yield all([repositoriesSaga()]);
}

export default rootSaga;
