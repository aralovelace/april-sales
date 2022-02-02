import { AnnualItems } from '../../../interfaces';

export interface AnnualState {
  annual: AnnualItems | null;
  loading?: boolean;
  error?: string;
  clear?: null;
}

export const initialAnnualState: AnnualState = {
  annual: null,
  error: '',
  loading: false,
  clear: null,
};
