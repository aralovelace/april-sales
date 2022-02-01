import { PayloadAction } from '@reduxjs/toolkit';
import { SalesItemState } from "../state";
import { SalesItemTotal } from "../../../../interfaces";

export const createSalesReducer= (
  state: SalesItemState,
  action: PayloadAction<SalesItemTotal>
) => {
  state.sales = action.payload;

};
