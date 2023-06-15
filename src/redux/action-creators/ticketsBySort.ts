import { TicketsBySortAction, TicketsBySortActionTypes } from '../../types/ticketsBySort';

export const addTicketsToView = (sortType): TicketsBySortAction => {
  return {
    type: TicketsBySortActionTypes.ADD_TICKETS_TO_VIEW,
    sortType,
  };
};
