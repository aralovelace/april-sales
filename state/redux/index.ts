import {
  initialSalesItemState,
  salesItemReducer,
  SalesItemState,
} from './sales';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
let store: any;

export * from './sales';

export type StoreState = {
  salesList: SalesItemState;
};

export const initialState: StoreState = {
  salesList: initialSalesItemState,
};

const reducers = combineReducers({
  salesList: salesItemReducer,
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
