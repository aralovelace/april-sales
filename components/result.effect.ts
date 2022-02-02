import { useSelector } from 'react-redux';
import { StoreState } from '../state';

export const useResultEffect = () => {
  const totalState = useSelector((state: StoreState) => state) as any;
  const saleState = totalState.salesList.sales;
  const annualState = totalState.annualList.annual;
  const supplier =
    (saleState?.identifyRequirements + saleState?.requestQuotation) *
    annualState?.unique;
  const quotation =
    (saleState?.findProducts +
      saleState?.raiseOrder +
      saleState?.authoriseSale +
      saleState?.payProvider) *
    annualState?.unique;
  const expediting = saleState?.deliverProduct * annualState?.annual;
  const processing = saleState?.invoiceCheck * annualState?.unique;
  const paying = saleState?.placeOrder * annualState?.supplier;
  const grandTotal = supplier + quotation + expediting + processing + paying;

  return {
    supplier,
    quotation,
    expediting,
    processing,
    paying,
    grandTotal,
  };
};
