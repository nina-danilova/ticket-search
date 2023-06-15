import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTransferFilter as setFilter } from '../../../redux/action-creators/transferFilterList';
import { AppDispatch } from '../../../redux/store';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FilterOption } from '../../../constants';

import styles from './checkbox.module.scss';

type T = {
  filterOption: FilterOption;
};

export const Checkbox: React.FC<T> = ({ filterOption }) => {
  const filterList = useTypedSelector((state) => state.transferFilterList);
  const dispatch: AppDispatch = useDispatch();
  const toggleTransferFilter = (filter) => dispatch(setFilter(filter));
  const filterName = filterOption.filterType;
  const isChecked = filterList[filterName];
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox__input}
        id={filterOption.name}
        name={filterOption.name}
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleTransferFilter(filterName)}
      />
      <label
        className={styles.checkbox__label}
        htmlFor={filterOption.name}
      >
        <span className={styles.checkbox__text}>{filterOption.label}</span>
      </label>
    </div>
  );
};
