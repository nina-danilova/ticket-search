import React from 'react';

import { PageWrapper } from '../layout/page-wrapper';
import {
  getTickets,
  doneTickets,
  fetchTickets,
  fetchTicketsError,
  fetchTicketsSuccess,
} from '../../redux/action-creators/entities';
import {
  getSearchIdAndTickets,
  fetchSearchId,
  fetchSearchIdError,
  fetchSearchIdSuccess,
} from '../../redux/action-creators/searchId';
import { toggleTransferFilter } from '../../redux/action-creators/transferFilterList';
import { selectSortType } from '../../redux/action-creators/currentSortType';
import { addTicketsToView } from '../../redux/action-creators/ticketsBySort';
import { store } from '../../redux/store';
import { useActionCreators } from '../../hooks/hooks';
import { getFromStorage } from '../../services/api';

import './style.css';

const allActions = {
  getTickets,
  doneTickets,
  fetchTickets,
  fetchTicketsError,
  fetchTicketsSuccess,
  getSearchIdAndTickets,
  fetchSearchId,
  fetchSearchIdError,
  fetchSearchIdSuccess,
  toggleTransferFilter,
  selectSortType,
  addTicketsToView,
};

export const App: React.FC = () => {
  const actions = useActionCreators(allActions);
  const searchId = getFromStorage('searchId');

  if (searchId === undefined) {
    actions.getSearchIdAndTickets();
  } else {
    actions.getTickets(searchId, store.getState().entities.nextTicketId);
  }

  return <PageWrapper />;
};
