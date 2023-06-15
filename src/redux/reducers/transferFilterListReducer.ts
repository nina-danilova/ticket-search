import { TransferFilterListState, TransferFilterListAction, TransferFilterTypes } from '../../types/transferFilterList';

const initialState: TransferFilterListState = {
  allTransferVariants: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
};

export const transferFilterListReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: TransferFilterListAction
): TransferFilterListState => {
  switch (action.transferFilter) {
    case TransferFilterTypes.TOGGLE_FILTER_ALL_TRANSFER:
      if (state.allTransferVariants) {
        return {
          ...state,
          allTransferVariants: false,
          noTransfer: false,
          oneTransfer: false,
          twoTransfer: false,
          threeTransfer: false,
        };
      }
      return {
        ...state,
        allTransferVariants: true,
        noTransfer: true,
        oneTransfer: true,
        twoTransfer: true,
        threeTransfer: true,
      };
    case TransferFilterTypes.TOGGLE_FILTER_NO_TRANSFER:
      if (state.noTransfer) {
        return {
          ...state,
          allTransferVariants: false,
          noTransfer: false,
        };
      }
      if (state.oneTransfer && state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          allTransferVariants: true,
          noTransfer: true,
        };
      }
      return {
        ...state,
        noTransfer: true,
      };
    case TransferFilterTypes.TOGGLE_FILTER_ONE_TRANSFER:
      if (state.oneTransfer) {
        return {
          ...state,
          allTransferVariants: false,
          oneTransfer: false,
        };
      }
      if (state.noTransfer && state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          allTransferVariants: true,
          oneTransfer: true,
        };
      }
      return {
        ...state,
        oneTransfer: true,
      };
    case TransferFilterTypes.TOGGLE_FILTER_TWO_TRANSFERS:
      if (state.twoTransfer) {
        return {
          ...state,
          allTransferVariants: false,
          twoTransfer: false,
        };
      }
      if (state.noTransfer && state.oneTransfer && state.threeTransfer) {
        return {
          ...state,
          allTransferVariants: true,
          twoTransfer: true,
        };
      }
      return {
        ...state,
        twoTransfer: true,
      };
    case TransferFilterTypes.TOGGLE_FILTER_THREE_TRANSFERS:
      if (state.threeTransfer) {
        return {
          ...state,
          allTransferVariants: false,
          threeTransfer: false,
        };
      }
      if (state.noTransfer && state.oneTransfer && state.twoTransfer) {
        return {
          ...state,
          allTransferVariants: true,
          threeTransfer: true,
        };
      }
      return {
        ...state,
        threeTransfer: true,
      };
    default:
      return state;
  }
};
