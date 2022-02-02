import { SalesItemTotal } from '../../../interfaces';

export interface SalesItemState {
  sales: SalesItemTotal | null;
  total: number;
  loading?: boolean;
  clear?: null;
  error?: string;
}

export const initialSalesItemState: SalesItemState = {
  sales: null,
  error: '',
  total: 0,
  loading: false,
  clear: null,
};
