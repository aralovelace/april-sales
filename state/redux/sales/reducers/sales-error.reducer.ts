import { SalesItemState } from '../state';
import { PayloadAction } from '@reduxjs/toolkit';

export const salesErrorReducer = (
  state: SalesItemState,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = action.payload;
};
