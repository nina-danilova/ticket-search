import { ThunkAction } from 'redux-thunk';

import { RootState } from '../redux/reducers';

export type SegmentsType = {
  id: number;
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}[];

export type TicketType = {
  id: number;
  price: number;
  carrier: string;
  segments: SegmentsType;
};

export type EntitiesState = {
  isFetching: boolean;
  tickets: TicketType[];
  nextTicketId: number;
  hasError: boolean;
  error: null | string;
  receivedAt: number | null;
};

export enum EntitiesActionTypes {
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  FETCH_TICKETS_ALL_DONE = 'FETCH_TICKETS_ALL_DONE',
}

type FetchTicketsAction = {
  type: EntitiesActionTypes.FETCH_TICKETS;
};

type FetchTicketsSuccessAction = {
  type: EntitiesActionTypes.FETCH_TICKETS_SUCCESS;
  items: TicketType[];
  nextTicketId: number;
  receivedAt: number;
};

type FetchTicketsErrorAction = {
  type: EntitiesActionTypes.FETCH_TICKETS_ERROR;
  error: string;
};

type FetchTicketsAllDoneAction = {
  type: EntitiesActionTypes.FETCH_TICKETS_ALL_DONE;
};

export type EntitiesAction =
  | FetchTicketsAction
  | FetchTicketsSuccessAction
  | FetchTicketsErrorAction
  | FetchTicketsAllDoneAction;

export type EntitiesThunk = ThunkAction<Promise<void>, RootState, unknown, EntitiesAction>;
