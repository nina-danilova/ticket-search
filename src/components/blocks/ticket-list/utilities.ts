import { TicketType } from '../../../types/entities';
import { TransferFilterListState } from '../../../types/transferFilterList';

export const sortTicketByPrice = (list: TicketType[]) => {
  list.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }

    return 0;
  });
};

export const sortTicketByDuration = (list: TicketType[]) => {
  list.sort((a, b) => {
    if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
      return -1;
    }
    if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
      return 1;
    }

    return 0;
  });
};

export const filterTicketList = (ticketList: TicketType[], filterList: TransferFilterListState) => {
  if (filterList.allTransferVariants) {
    return ticketList;
  }
  let filteredList = [...ticketList];
  if (!filterList.noTransfer) {
    filteredList = filteredList.filter(
      (ticket) => !(ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0)
    );
  }
  if (!filterList.oneTransfer) {
    filteredList = filteredList.filter(
      (ticket) => !(ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1)
    );
  }
  if (!filterList.twoTransfer) {
    filteredList = filteredList.filter(
      (ticket) => !(ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2)
    );
  }
  if (!filterList.threeTransfer) {
    filteredList = filteredList.filter(
      (ticket) => !(ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3)
    );
  }
  return filteredList;
};
