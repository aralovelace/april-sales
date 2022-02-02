import { createSlice } from '@reduxjs/toolkit';
import { initialSalesItemState } from './state';
import { loadingSalesReducer } from './reducers/loading-sales.reducer';
import { salesErrorReducer } from './reducers/sales-error.reducer';
import { createSalesReducer } from './reducers/create-sales.reducer';
import { updateSalesReducer } from './reducers/update-sales.reducer';
import { updateTotalSalesReducer } from './reducers/update-total-sales.reducer';
import { clearSalesReducer } from './reducers/clear-sales.reducer';

export const salesItemSlice = createSlice({
  name: 'Sales Item',
  initialState: initialSalesItemState,
  reducers: {
    loading: loadingSalesReducer,
    error: salesErrorReducer,
    clear: clearSalesReducer,
    create: createSalesReducer,
    update: updateSalesReducer,
    updateTotal: updateTotalSalesReducer,
  },
});

export const salesItemReducer = salesItemSlice.reducer;
