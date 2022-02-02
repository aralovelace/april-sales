import { PayloadAction } from '@reduxjs/toolkit';
import { SalesItemState } from '../state';
import { SalesItemTotal } from '../../../../interfaces';

export const updateSalesReducer = (
  state: SalesItemState,
  action: PayloadAction<SalesItemTotal>
) => {
  state.sales = action.payload;
};
