import React from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FilterList } from '../../blocks/filter-list/filter-list';
import { TicketInfo } from '../../blocks/ticket-info/ticket-info';
import { Message } from '../../ui/message';

import styles from './main.module.scss';

export const Main: React.FC = () => {
  const hasError = useTypedSelector((state) => state.searchId.hasError);
  const errorMessage = hasError ? (
    <Message
      message="Произошла ошибка"
      description="Ошибка идентификации пользователя. Перезагрузите страницу"
      type="error"
      closable={false}
    />
  ) : null;
  return (
    <main className={styles.main}>
      {errorMessage}
      <FilterList />
      <TicketInfo />
    </main>
  );
};
