import React from 'react';

import { Tabs } from '../../ui/tabs';

import styles from './ticket-info.module.scss';

export const TicketInfo: React.FC = () => {
  return (
    <section className={styles['ticket-info']}>
      <h2 className={styles['visually-hidden']}>Список билетов и способы сортировки</h2>
      <Tabs />
    </section>
  );
};
