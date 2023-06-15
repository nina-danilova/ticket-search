import { CurrentSortTypeAction, CurrentSortTypeActionTypes } from '../../types/currentSortType';

export const selectSortType = (sortType): CurrentSortTypeAction => {
  return {
    type: CurrentSortTypeActionTypes.SELECT_SORT_TYPE,
    sortType,
  };
};
