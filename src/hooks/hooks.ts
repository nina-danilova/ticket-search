import { useMemo } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { AsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
  ...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
};

export const useAppDispatch = useDispatch<AppDispatch>;
export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
