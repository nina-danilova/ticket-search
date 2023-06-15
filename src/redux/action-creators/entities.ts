import { EntitiesAction, EntitiesActionTypes, EntitiesThunk } from '../../types/entities';
import { removeFromStorage, getData } from '../../services/api';

export const fetchTickets = (): EntitiesAction => {
  return {
    type: EntitiesActionTypes.FETCH_TICKETS,
  };
};

export const fetchTicketsError = (error): EntitiesAction => {
  return {
    type: EntitiesActionTypes.FETCH_TICKETS_ERROR,
    error,
  };
};

export const fetchTicketsSuccess = (json): EntitiesAction => {
  return {
    type: EntitiesActionTypes.FETCH_TICKETS_SUCCESS,
    items: json.tickets,
    receivedAt: Date.now(),
    nextTicketId: json.nextTicketId,
  };
};

export const doneTickets = (): EntitiesAction => {
  removeFromStorage('searchId');
  return {
    type: EntitiesActionTypes.FETCH_TICKETS_ALL_DONE,
  };
};

export function getTickets(
  searchId: string,
  ticketId: number,
  prevJson: {
    tickets: never[];
  } = { tickets: [] }
): EntitiesThunk {
  let ticketCounter = ticketId;
  let jsonWithIndex = { ...prevJson };
  return async (dispatch) => {
    try {
      dispatch(fetchTickets());
      const response = await getData(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      const { tickets } = response;
      const ticketsWithIndex = tickets.map((ticket) => {
        const id = ticketCounter;
        const { segments } = ticket;
        let segmentCounter = 0;
        const segmentsWithIndex = segments.map((segment) => {
          const segmentId = `${ticketCounter}-${segmentCounter}`;
          segmentCounter += 1;
          const segmentWithIndex = { ...segment, id: segmentId };
          return segmentWithIndex;
        });
        const ticketWithIndex = { ...ticket, id, segments: segmentsWithIndex };
        ticketCounter += 1;
        return ticketWithIndex;
      });
      const allTicketsWithIndex = [...prevJson.tickets, ...ticketsWithIndex];
      jsonWithIndex = { ...prevJson, ...response, tickets: allTicketsWithIndex, nextTicketId: ticketCounter };

      dispatch(fetchTicketsSuccess(jsonWithIndex));
      if (!response.stop) {
        dispatch(getTickets(searchId, ticketCounter, jsonWithIndex));
      } else {
        dispatch(doneTickets());
      }
    } catch (error) {
      dispatch(fetchTicketsError(error));
      dispatch(getTickets(searchId, ticketCounter, jsonWithIndex));
    }
  };
}
