import { TransferFilterTypes } from './types/transferFilterList';

export type FilterOption = {
  id: number;
  label: string;
  name: string;
  filterType: string;
};

export type FilterType = {
  id: number;
  title: string;
  type: string;
  options: FilterOption[];
}[];

export const filterList: FilterType = [
  {
    id: 0,
    title: 'Количество пересадок',
    type: 'checkbox',
    options: [
      {
        id: 0,
        label: 'Все',
        name: 'all-transfer-variants',
        filterType: TransferFilterTypes.TOGGLE_FILTER_ALL_TRANSFER,
      },
      {
        id: 1,
        label: 'Без пересадок',
        name: 'no-transfer',
        filterType: TransferFilterTypes.TOGGLE_FILTER_NO_TRANSFER,
      },
      {
        id: 2,
        label: '1 пересадка',
        name: '1-transfer',
        filterType: TransferFilterTypes.TOGGLE_FILTER_ONE_TRANSFER,
      },
      {
        id: 3,
        label: '2 пересадки',
        name: '2-transfers',
        filterType: TransferFilterTypes.TOGGLE_FILTER_TWO_TRANSFERS,
      },
      {
        id: 4,
        label: '3 пересадки',
        name: '3-transfers',
        filterType: TransferFilterTypes.TOGGLE_FILTER_THREE_TRANSFERS,
      },
    ],
  },
];

export enum sortTypes {
  SORT_BY_PRICE = 'SORT_BY_PRICE',
  SORT_BY_TIME = 'SORT_BY_TIME',
  SORT_OPTIMAL = 'SORT_OPTIMAL',
}

export const tabs = [
  {
    id: 0,
    title: 'Самый дешевый',
    sortType: sortTypes.SORT_BY_PRICE,
  },
  {
    id: 1,
    title: 'Самый быстрый',
    sortType: sortTypes.SORT_BY_TIME,
  },
  {
    id: 2,
    title: 'Оптимальный',
    sortType: sortTypes.SORT_OPTIMAL,
  },
];

export const linkToMain = '/';
