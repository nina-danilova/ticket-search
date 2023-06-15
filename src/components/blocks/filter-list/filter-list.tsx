import React from 'react';

import { Checkbox } from '../../ui/checkbox';
import { filterList } from '../../../constants';

import styles from './filter-list.module.scss';

export const FilterList: React.FC = () => {
  return (
    <section className={styles['filter-list']}>
      <h2 className={styles['visually-hidden']}>Фильтры для найденных билетов</h2>
      <div className={styles['filter-list__form']}>
        {filterList.map((filter) => (
          <div
            className={styles['filter-item']}
            key={filter.id}
          >
            <legend className={styles['filter-item__title']}>{filter.title}</legend>
            <ul className={styles['options-list']}>
              {filter.options.map((filterOption) => (
                <li
                  className={styles['options-list__item']}
                  key={filterOption.id}
                >
                  <Checkbox filterOption={filterOption} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
