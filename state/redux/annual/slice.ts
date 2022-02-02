import { createSlice } from '@reduxjs/toolkit';
import { initialAnnualState } from './state';
import { loadingAnnualReducer } from './reducers/loading-annual.reducer';
import { annualErrorReducer } from './reducers/annual-error.reducer';
import { createAnnualReducer } from './reducers/create-annual.reducer';
import { updateAnnualReducer } from './reducers/update-annual.reducer';
import { clearAnnualReducer } from './reducers/clear-annual.reducer';

export const annualSlice = createSlice({
  name: 'Annual Total',
  initialState: initialAnnualState,
  reducers: {
    loading: loadingAnnualReducer,
    error: annualErrorReducer,
    clear: clearAnnualReducer,
    create: createAnnualReducer,
    update: updateAnnualReducer,
  },
});

export const annualReducer = annualSlice.reducer;
