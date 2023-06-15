import React from 'react';
import { useDispatch } from 'react-redux';

import { addTicketsToView as addTickets } from '../../../redux/action-creators/ticketsBySort';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AppDispatch } from '../../../redux/store';

import styles from './button.module.scss';

type T = {
  children: React.ReactNode;
};

export const Button: React.FC<T> = ({ children }) => {
  const currentSortType = useTypedSelector((state) => state.currentSortType);
  const dispatch: AppDispatch = useDispatch();
  const addTicketsToView = (sortType) => dispatch(addTickets(sortType));
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => addTicketsToView(currentSortType)}
    >
      {children}
    </button>
  );
};
