import React from 'react';

import { TransferInfo } from '../transfer-info';
import { TicketType } from '../../../types/entities';

import styles from './ticket-card.module.scss';

type T = {
  ticket: TicketType;
};

export const TicketCard: React.FC<T> = ({ ticket }) => {
  const carrierSrc = `https://pics.avs.io/99/36/${ticket.carrier}.png`;
  return (
    <div className={styles['ticket-card']}>
      <div className={styles['ticket-card__scope']}>
        <p className={styles['ticket-card__price']}>{ticket.price} р</p>
        <img
          width={110}
          height={36}
          src={carrierSrc}
          alt={ticket.carrier}
        />
      </div>
      <TransferInfo segments={ticket.segments} />
    </div>
  );
};
