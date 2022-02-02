import { AnnualState } from '../state';
import { PayloadAction } from '@reduxjs/toolkit';

export const annualErrorReducer = (
  state: AnnualState,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = action.payload;
};
