import {  SalesItemTotal } from "../../../interfaces";


export interface SalesItemState {
  sales: SalesItemTotal | null;
  loading?:boolean;
  error?:string;
}


export const initialSalesItemState: SalesItemState = {
  sales: null,
  error: '',
  loading: false
,}
