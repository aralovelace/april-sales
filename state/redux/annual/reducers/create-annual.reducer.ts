import { PayloadAction } from '@reduxjs/toolkit';
import { AnnualState } from '../state';
import { AnnualItems } from '../../../../interfaces';

export const createAnnualReducer = (
  state: AnnualState,
  action: PayloadAction<AnnualItems>
) => {
  state.annual = action.payload;
};
