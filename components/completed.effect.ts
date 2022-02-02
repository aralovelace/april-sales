import { useDispatch } from 'react-redux';
import { annualSlice } from '../state/redux/annual';
import { salesItemSlice } from '../state';

export const useCompletedEffect = () => {
  const dispatch = useDispatch();
  const clearForm = () => {
    dispatch(annualSlice.actions.clear());
    dispatch(salesItemSlice.actions.clear());
  };
  return { clearForm };
};
