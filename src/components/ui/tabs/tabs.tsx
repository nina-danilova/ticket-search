import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { selectSortType as setSort } from '../../../redux/action-creators/currentSortType';
import { TicketList } from '../../blocks/ticket-list';
import { tabs } from '../../../constants';
import { AppDispatch } from '../../../redux/store';

import styles from './tabs.module.scss';

export const Tabs: React.FC = () => {
  const currentSortType = useTypedSelector((state) => state.currentSortType);
  const dispatch: AppDispatch = useDispatch();
  const selectSortType = (sortType) => dispatch(setSort(sortType));
  return (
    <>
      <div className={styles.tabs}>
        {tabs &&
          tabs.length &&
          tabs.map((tab) => {
            let isActive = false;
            if (tab.sortType === currentSortType) {
              isActive = true;
            }
            const buttonClass = classNames({
              [styles.tabs__button]: true,
              [styles['tabs__button--active']]: isActive,
            });
            return (
              <button
                className={buttonClass}
                type="button"
                key={tab.id}
                onClick={() => {
                  selectSortType(tab.sortType);
                }}
              >
                {tab.title}
              </button>
            );
          })}
      </div>
      <TicketList />
    </>
  );
};
