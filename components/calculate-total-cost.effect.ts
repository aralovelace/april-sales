import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { salesItemSlice, StoreState } from "../state/redux";
import { SalesItemsData } from '../data';
import { SalesItemTotal } from '../interfaces';

export const useCalculateTotalCostEffect = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [overAllTotal, setOverAllTotal] = useState(0);
  const salesTotalState = useSelector(
    (state: StoreState) => state.salesList.sales
  ) as SalesItemTotal;

  const createSales = (selected: any): void => {

    let salesTotal: any | null = null;


    if (selected != null) {
      salesTotal = {
        identifyRequirements: selected.includes('0')
          ? SalesItemsData.filter((m) => m.id == 0)[0].cost
          : 0,
        requestQuotation: selected.includes('1')
          ? SalesItemsData.filter((m) => m.id == 1)[0].cost
          : 0,
        findProducts: selected.includes('2')
          ? SalesItemsData.filter((m) => m.id == 2)[0].cost
          : 0,
        raiseOrder: selected.includes('3')
          ? SalesItemsData.filter((m) => m.id == 3)[0].cost
          : 0,
        authoriseSale: selected.includes('4')
          ? SalesItemsData.filter((m) => m.id == 4)[0].cost
          : 0,
        payProvider: selected.includes('5')
          ? SalesItemsData.filter((m) => m.id == 5)[0].cost
          : 0,
        deliverProduct: selected.includes('6')
          ? SalesItemsData.filter((m) => m.id == 6)[0].cost
          : 0,
        invoiceCheck: selected.includes('7')
          ? SalesItemsData.filter((m) => m.id == 7)[0].cost
          : 0,
        placeOrder: selected.includes('8')
          ? SalesItemsData.filter((m) => m.id == 8)[0].cost
          : 0
      };

      setOverAllTotal (
       salesTotal.identifyRequirements +
       salesTotal.requestQuotation +
       salesTotal.findProducts +
       salesTotal.raiseOrder +
       salesTotal.authoriseSale +
       salesTotal.payProvider +
       salesTotal.deliverProduct +
       salesTotal.invoiceCheck +
       salesTotal.placeOrder);

      if (salesTotalState===null) {
        dispatch(salesItemSlice.actions.create(salesTotal));
      } else {
        dispatch(salesItemSlice.actions.update(salesTotal));
      }
      setLoading(true);
      setSuccess(true);
    }
  };

  return { createSales, overAllTotal, loading, success, error: '' };
};
