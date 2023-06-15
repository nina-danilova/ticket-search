import React from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { TicketCard } from '../../ui/ticket-card/ticket-card';
import { Button } from '../../ui/button';
import { sortTypes } from '../../../constants';
import { Spinner } from '../../ui/spinner';
import { Message } from '../../ui/message';

import { filterTicketList, sortTicketByPrice, sortTicketByDuration } from './utilities';
import styles from './ticket-list.module.scss';

export const TicketList: React.FC = () => {
  const tickets = useTypedSelector((state) => state.entities.tickets);
  const currentSortType = useTypedSelector((state) => state.currentSortType);
  const isFetching = useTypedSelector((state) => state.entities.isFetching);
  const filterList = useTypedSelector((state) => state.transferFilterList);
  const sortByPriceIndex = useTypedSelector((state) => state.ticketsBySort.SORT_BY_PRICE.lastIndex);
  const sortByTimeIndex = useTypedSelector((state) => state.ticketsBySort.SORT_BY_TIME.lastIndex);

  const ticketList = tickets.slice();
  const filteredTicketList = filterTicketList(ticketList, filterList);
  let ticketListForView;

  switch (currentSortType) {
    case sortTypes.SORT_BY_PRICE:
      sortTicketByPrice(filteredTicketList);
      ticketListForView = filteredTicketList.slice(0, sortByPriceIndex + 1);
      break;
    case sortTypes.SORT_BY_TIME:
      sortTicketByDuration(filteredTicketList);
      ticketListForView = filteredTicketList.slice(0, sortByTimeIndex + 1);
      break;
    case sortTypes.SORT_OPTIMAL:
      sortTicketByPrice(filteredTicketList);
      ticketListForView = filteredTicketList.slice(0, sortByPriceIndex + 1);
      break;
    default:
      break;
  }
  const loadingMessage = isFetching ? <Spinner /> : null;
  const noTicketsMessage =
    filteredTicketList.length === 0 ? (
      <Message
        message="Рейсов, подходящих под заданные фильтры, не найдено"
        description="Перезагрузите страницу"
        type="info"
        closable={false}
      />
    ) : null;

  return (
    <>
      {loadingMessage}
      {noTicketsMessage}
      <ul className={styles['ticket-list']}>
        {ticketListForView.map((ticket) => (
          <li
            className={styles['ticket-list__item']}
            key={ticket.id}
          >
            <TicketCard ticket={ticket} />
          </li>
        ))}
      </ul>
      {filteredTicketList.length > 5 ? <Button>Показать еще 5 билетов!</Button> : null}
    </>
  );
};
