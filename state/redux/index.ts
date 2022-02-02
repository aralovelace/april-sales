import {
  initialSalesItemState,
  salesItemReducer,
  SalesItemState,
} from './sales';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { annualReducer, AnnualState, initialAnnualState } from './annual';
let store: any;

export * from './sales';

export type StoreState = {
  salesList: SalesItemState;
  annualList: AnnualState;
};

export const initialState: StoreState = {
  salesList: initialSalesItemState,
  annualList: initialAnnualState,
};

const reducers = combineReducers({
  salesList: salesItemReducer,
  annualList: annualReducer,
});

function initStore(preloadedState = initialState) {
  return configureStore({
    reducer: reducers,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export const initializeStore = (preloadedState: StoreState) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
