import { ThunkAction } from 'redux-thunk';

import { RootState } from '../redux/reducers';

export enum SearchIdActionTypes {
  FETCH_SEARCH_ID = 'FETCH_SEARCH_ID',
  FETCH_SEARCH_ID_ERROR = 'FETCH_SEARCH_ID_ERROR',
  FETCH_SEARCH_ID_SUCCESS = 'FETCH_SEARCH_ID_SUCCESS',
}

type FetchSearchIdAction = {
  type: SearchIdActionTypes.FETCH_SEARCH_ID;
  isFetching: boolean;
};

type FetchSearchIdErrorAction = {
  type: SearchIdActionTypes.FETCH_SEARCH_ID_ERROR;
  isFetching: boolean;
  hasError: boolean;
  error: string;
};

type FetchSearchIdSuccessAction = {
  type: SearchIdActionTypes.FETCH_SEARCH_ID_SUCCESS;
  isFetching: boolean;
  searchId: string;
};

export type SearchIdAction = FetchSearchIdAction | FetchSearchIdErrorAction | FetchSearchIdSuccessAction;

export type SearchIdState = {
  searchId: string;
  isFetching: boolean;
  hasError: boolean;
  error: null | string;
};

export type SearchIdThunk = ThunkAction<Promise<void>, RootState, unknown, SearchIdAction>;
