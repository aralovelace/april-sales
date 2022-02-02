import { SalesItemState } from '../../index';

export const clearSalesReducer = (state: SalesItemState) => {
  state.sales = null;
  state.total = 0;
};
