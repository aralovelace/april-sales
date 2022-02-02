import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { salesItemSlice, StoreState } from '../state/redux';
import { SalesItemsData } from '../data';


export const useCalculateTotalCostEffect = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const salesTotalState = useSelector(
    (state: StoreState) => state.salesList
  );
  const [overAllTotal, setOverAllTotal] = useState(
    salesTotalState ? salesTotalState.total : 0
  );


  const createSales = (selected: [string]): void => {
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
          : 0,
        selected: selected,
      };

      setOverAllTotal(
        salesTotal.identifyRequirements +
          salesTotal.requestQuotation +
          salesTotal.findProducts +
          salesTotal.raiseOrder +
          salesTotal.authoriseSale +
          salesTotal.payProvider +
          salesTotal.deliverProduct +
          salesTotal.invoiceCheck +
          salesTotal.placeOrder
      );

      if (salesTotalState === null) {
        dispatch(salesItemSlice.actions.create(salesTotal));
      } else if (salesTotal) {
        dispatch(salesItemSlice.actions.update(salesTotal));
        console.log(salesTotal);
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
