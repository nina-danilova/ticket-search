import { sortTypes } from '../../constants';
import { CurrentSortTypeState, CurrentSortTypeActionTypes, CurrentSortTypeAction } from '../../types/currentSortType';

const initialState: CurrentSortTypeState = sortTypes.SORT_BY_PRICE;

export const currentSortTypeReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: CurrentSortTypeAction
): CurrentSortTypeState => {
  switch (action.type) {
    case CurrentSortTypeActionTypes.SELECT_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
};
