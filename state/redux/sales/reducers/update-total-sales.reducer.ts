import { PayloadAction } from '@reduxjs/toolkit';

export const updateTotalSalesReducer = (
  state: { total: number },
  action: PayloadAction<number>
) => {
  state.total = action.payload;
};
