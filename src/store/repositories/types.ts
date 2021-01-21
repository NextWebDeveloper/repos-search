export interface Repository {
  id: number;
  name: string;
  url: string;
}

export interface SystemState {
  data?: Repository[] | null;
  loading: boolean;
  error: boolean;
}

export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const LOAD_REPOSITORIES = "LOAD_REPOSITORIES";

export interface SetRepositoriesAction {
  type: typeof SET_REPOSITORIES;
  payload: SystemState;
}

export interface LoadRepositoriesAction {
  type: typeof LOAD_REPOSITORIES;
  search: string;
}
