import { AnnualState } from '../state';

export const clearAnnualReducer = (state: AnnualState) => {
  state.annual = null;
};
