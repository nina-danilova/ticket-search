export type TransferFilterListState = {
  allTransferVariants: boolean;
  noTransfer: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
};

export enum TransferFilterListActionTypes {
  TOGGLE_TRANSFER_FILTER = 'TOGGLE_TRANSFER_FILTER',
}

export enum TransferFilterTypes {
  TOGGLE_FILTER_ALL_TRANSFER = 'allTransferVariants',
  TOGGLE_FILTER_NO_TRANSFER = 'noTransfer',
  TOGGLE_FILTER_ONE_TRANSFER = 'oneTransfer',
  TOGGLE_FILTER_TWO_TRANSFERS = 'twoTransfer',
  TOGGLE_FILTER_THREE_TRANSFERS = 'threeTransfer',
}

type ToggleFilterAllTransferAction = {
  type: TransferFilterListActionTypes.TOGGLE_TRANSFER_FILTER;
  transferFilter: TransferFilterTypes.TOGGLE_FILTER_ALL_TRANSFER;
};

type ToggleFilterNoTransferAction = {
  type: TransferFilterListActionTypes.TOGGLE_TRANSFER_FILTER;
  transferFilter: TransferFilterTypes.TOGGLE_FILTER_NO_TRANSFER;
};

type ToggleFilterOneTransferAction = {
  type: TransferFilterListActionTypes.TOGGLE_TRANSFER_FILTER;
  transferFilter: TransferFilterTypes.TOGGLE_FILTER_ONE_TRANSFER;
};

type ToggleFilterTwoTransfersAction = {
  type: TransferFilterListActionTypes.TOGGLE_TRANSFER_FILTER;
  transferFilter: TransferFilterTypes.TOGGLE_FILTER_TWO_TRANSFERS;
};

type ToggleFilterThreeTransfersAction = {
  type: TransferFilterListActionTypes.TOGGLE_TRANSFER_FILTER;
  transferFilter: TransferFilterTypes.TOGGLE_FILTER_THREE_TRANSFERS;
};

export type TransferFilterListAction =
  | ToggleFilterAllTransferAction
  | ToggleFilterNoTransferAction
  | ToggleFilterOneTransferAction
  | ToggleFilterTwoTransfersAction
  | ToggleFilterThreeTransfersAction;
