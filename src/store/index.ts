import { combineReducers } from "redux";
import { repositoriesReducer } from "./repositories/reducers";

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
