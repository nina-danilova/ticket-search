import { SearchIdState, SearchIdActionTypes, SearchIdAction } from '../../types/searchId';

const initialState: SearchIdState = {
  searchId: '',
  isFetching: false,
  hasError: false,
  error: null,
};

export const searchIdReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: SearchIdAction
): SearchIdState => {
  switch (action.type) {
    case SearchIdActionTypes.FETCH_SEARCH_ID:
      return {
        ...state,
        isFetching: true,
      };
    case SearchIdActionTypes.FETCH_SEARCH_ID_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.error,
      };
    case SearchIdActionTypes.FETCH_SEARCH_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchId: action.searchId,
      };
    default:
      return state;
  }
};
