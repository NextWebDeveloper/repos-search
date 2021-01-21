import { SystemState, SetRepositoriesAction, SET_REPOSITORIES } from "./types";

const initialState: SystemState = {
  data: null,
  loading: false,
  error: false,
};

export const repositoriesReducer = (
  state = initialState,
  action: SetRepositoriesAction
) => {
  switch (action.type) {
    case SET_REPOSITORIES: {
      return {
        ...(state ?? {}),
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
