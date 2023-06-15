import { TicketsBySortState, TicketsBySortActionTypes, TicketsBySortAction } from '../../types/ticketsBySort';

const initialState: TicketsBySortState = {
  SORT_BY_PRICE: {
    lastIndex: 4,
  },
  SORT_BY_TIME: {
    lastIndex: 4,
  },
  SORT_OPTIMAL: {
    lastIndex: 4,
  },
};

export const ticketsBySortReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: TicketsBySortAction
): TicketsBySortState => {
  switch (action.type) {
    case TicketsBySortActionTypes.ADD_TICKETS_TO_VIEW:
      return {
        ...state,
        [action.sortType]: {
          lastIndex: state[action.sortType].lastIndex + 5,
        },
      };
    default:
      return state;
  }
};
