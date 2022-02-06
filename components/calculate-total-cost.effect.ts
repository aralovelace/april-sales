import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { salesItemSlice, StoreState } from '../state/redux';
import { SalesItemsData } from '../data';
import { Sales, SalesItemTotal } from '../interfaces';

export const useCalculateTotalCostEffect = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const salesTotalState = useSelector((state: StoreState) => state.salesList);
  const [overAllTotal, setOverAllTotal] = useState(
    salesTotalState ? salesTotalState.total : 0
  );

  const createSales = (selected: any): void => {
    let salesTotal: SalesItemTotal | null = null;
    let checkboxes: any = [];
    let overallTotal = 0;

    if (selected != null) {
      {
        SalesItemsData.map((sales: Sales) => {
          checkboxes[sales.name] = selected.includes(sales.name)
            ? sales.cost
            : 0;
          overallTotal += checkboxes[sales.name];
        });
      }
      salesTotal = { ...checkboxes, selected: selected };
      setOverAllTotal(overallTotal);

      if (salesTotalState === null) {
        if (salesTotal) {
          dispatch(salesItemSlice.actions.create(salesTotal));
        }
      } else if (salesTotal) {
        dispatch(salesItemSlice.actions.update(salesTotal));
      }

      setSuccess(true);
    }
  };

  dispatch(salesItemSlice.actions.updateTotal(overAllTotal));

  return {
    createSales,
    overAllTotal,
    salesTotalState,
    success,
    error: '',
  };
};
