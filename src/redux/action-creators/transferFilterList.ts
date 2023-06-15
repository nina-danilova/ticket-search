import { TransferFilterListAction, TransferFilterListActionTypes } from '../../types/transferFilterList';

export const toggleTransferFilter = (transferFilter): TransferFilterListAction => {
  return {
    type: TransferFilterListActionTypes.TOGGLE_TRANSFER_FILTER,
    transferFilter,
  };
};
