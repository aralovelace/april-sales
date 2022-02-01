import { createSlice } from '@reduxjs/toolkit';
import { initialSalesItemState } from "./state";
import { loadingSalesReducer } from "./reducers/loading-sales.reducer";
import { salesErrorReducer } from "./reducers/sales-error.reducer";
import { createSalesReducer } from "./reducers/create-sales.reducer";
import { updateSalesReducer } from "./reducers/update-sales.reducer";

export const salesItemSlice = createSlice({
  name: 'Sales Item',
  initialState:initialSalesItemState,
  reducers: {
    loading: loadingSalesReducer,
    error: salesErrorReducer,
    clearTotal:salesErrorReducer,
    create: createSalesReducer,
    update: updateSalesReducer,
  },
});

export const salesItemReducer = salesItemSlice.reducer;
