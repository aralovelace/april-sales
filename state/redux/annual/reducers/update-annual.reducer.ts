import { PayloadAction } from '@reduxjs/toolkit';
import { AnnualState } from '../state';
import { AnnualItems } from '../../../../interfaces';

export const updateAnnualReducer = (
  state: AnnualState,
  action: PayloadAction<AnnualItems>
) => {
  state.annual = action.payload;
};
