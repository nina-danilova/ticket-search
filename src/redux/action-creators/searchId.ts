import { setToStorage, getData } from '../../services/api';
import { SearchIdAction, SearchIdActionTypes, SearchIdThunk } from '../../types/searchId';

import { getTickets } from './entities';

export const fetchSearchId = (): SearchIdAction => {
  return {
    type: SearchIdActionTypes.FETCH_SEARCH_ID,
    isFetching: true,
  };
};

export const fetchSearchIdError = (error): SearchIdAction => {
  return {
    type: SearchIdActionTypes.FETCH_SEARCH_ID_ERROR,
    isFetching: false,
    hasError: true,
    error,
  };
};

export const fetchSearchIdSuccess = (json): SearchIdAction => {
  return {
    type: SearchIdActionTypes.FETCH_SEARCH_ID_SUCCESS,
    searchId: json.searchId,
    isFetching: false,
  };
};

export const getSearchIdAndTickets = (): SearchIdThunk => {
  return async (dispatch, getState) => {
    try {
      const ticketId = getState().entities.nextTicketId;
      dispatch(fetchSearchId());
      const response = await getData('https://aviasales-test-api.kata.academy/search');
      setToStorage('searchId', response.searchId);
      dispatch(fetchSearchIdSuccess(response));
      dispatch(getTickets(response.searchId, ticketId));
    } catch (error) {
      dispatch(fetchSearchIdError(error));
    }
  };
};
