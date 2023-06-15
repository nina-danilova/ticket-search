import { sortTypes } from '../constants';

export type CurrentSortTypeState = sortTypes.SORT_BY_PRICE | sortTypes.SORT_BY_TIME | sortTypes.SORT_OPTIMAL;

export enum CurrentSortTypeActionTypes {
  SELECT_SORT_TYPE = 'SELECT_SORT_TYPE',
}

type SelectSortTypeAction = {
  type: CurrentSortTypeActionTypes.SELECT_SORT_TYPE;
  sortType: CurrentSortTypeState;
};

export type CurrentSortTypeAction = SelectSortTypeAction;
