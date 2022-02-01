import { SalesItemState } from '../state';

export const loadingSalesReducer = (state: SalesItemState) => {
  state.loading = true;
};
