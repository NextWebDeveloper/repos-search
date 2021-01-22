import {
  SystemState,
  SetRepositoriesAction,
  SET_REPOSITORIES,
  LoadRepositoriesAction,
  LOAD_REPOSITORIES,
} from "./types";

export const loadRepositories = (): LoadRepositoriesAction => ({
  type: LOAD_REPOSITORIES,
});

export const setRepositories = (
  payload: SystemState
): SetRepositoriesAction => {
  return {
    type: SET_REPOSITORIES,
    payload: payload,
  };
};
