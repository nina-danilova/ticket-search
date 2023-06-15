import { combineReducers } from 'redux';

import { entitiesReducer } from './entitiesReducer';
import { currentSortTypeReducer } from './currentSortTypeReducer';
import { ticketsBySortReducer } from './ticketsBySortReducer';
import { searchIdReducer } from './searchIdReducer';
import { transferFilterListReducer } from './transferFilterListReducer';

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  currentSortType: currentSortTypeReducer,
  ticketsBySort: ticketsBySortReducer,
  searchId: searchIdReducer,
  transferFilterList: transferFilterListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
