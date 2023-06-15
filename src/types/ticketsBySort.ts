import { sortTypes } from '../constants';

type SortByPrice = {
  lastIndex: number;
};

type SortByTime = {
  lastIndex: number;
};

type SortOptimal = {
  lastIndex: number;
};

export type TicketsBySortState = {
  SORT_BY_PRICE: SortByPrice;
  SORT_BY_TIME: SortByTime;
  SORT_OPTIMAL: SortOptimal;
};

export enum TicketsBySortActionTypes {
  ADD_TICKETS_TO_VIEW = 'ADD_TICKETS_TO_VIEW',
}

type AddTicketsToViewAction = {
  type: TicketsBySortActionTypes.ADD_TICKETS_TO_VIEW;
  sortType: sortTypes;
};

export type TicketsBySortAction = AddTicketsToViewAction;
