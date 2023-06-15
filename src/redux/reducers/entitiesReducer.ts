import { EntitiesState, EntitiesActionTypes, EntitiesAction } from '../../types/entities';

const initialState: EntitiesState = {
  isFetching: false,
  tickets: [],
  nextTicketId: 0,
  hasError: false,
  error: null,
  receivedAt: null,
};

export const entitiesReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: EntitiesAction
): EntitiesState => {
  switch (action.type) {
    case EntitiesActionTypes.FETCH_TICKETS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
        receivedAt: null,
      };
    case EntitiesActionTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.items,
        nextTicketId: action.nextTicketId,
        receivedAt: action.receivedAt,
      };
    case EntitiesActionTypes.FETCH_TICKETS_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.error,
      };
    case EntitiesActionTypes.FETCH_TICKETS_ALL_DONE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
