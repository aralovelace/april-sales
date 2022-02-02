import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { StoreState } from '../state/redux';
import { AnnualItems } from '../interfaces';
import { annualSlice } from '../state/redux/annual';

export const AnnualTotalCostEffect = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const annualTotalState = useSelector(
    (state: StoreState) => state.annualList.annual
  ) as AnnualItems;

  const createAnnualTotal = (
    annualSpendIndustrial: number,
    numberUniqueOrders: number,
    numberSuppliers: number
  ): void => {
    const annualData = {
      annual: annualSpendIndustrial,
      unique: numberUniqueOrders,
      supplier: numberSuppliers,
    };

    if (annualTotalState === null) {
      dispatch(annualSlice.actions.create(annualData));
    } else {
      dispatch(annualSlice.actions.update(annualData));
    }
    setSuccess(true);

  };

  return { createAnnualTotal, annualTotalState, loading, success, error: '' };
};
