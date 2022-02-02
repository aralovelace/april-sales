import React from 'react';
import { Data, ResultData } from '../data';
import { ResultItem } from './result-item.component';
import { useResultEffect } from './result.effect';

export const Result = (props: {
  next: any;
  previous: any;
  setPage2Return: any;
}) => {
  const { supplier, quotation, expediting, processing, paying, grandTotal } =
    useResultEffect();
  props.setPage2Return('end');

  return (
    <div className="block w-full">
      <h2 className="text-center text-2xl font-medium text-bridge-red">
        {Data.TITLE} - YOUR RESULTS
      </h2>
      <div className="mt-20 mb-20 flex flex-col justify-between lg:flex-row">
        <div className="mx-auto w-full pr-5 lg:w-1/2">
          <p className="mt-5 text-2xl font-semibold text-bridge-red">
            {ResultData.DESC}
          </p>
          <p className="mt-8 text-base text-bridge-black">
            {ResultData.SUBTITLE}
          </p>
          <a
            onClick={props.previous}
            className="red-button-back mt-8 inline-block cursor-pointer"
          >
            {Data.BACK}
          </a>
        </div>
        <div className="mx-auto w-full pl-5 lg:w-1/2">
          <ResultItem
            label={Data.RESULT.SUPPLIER}
            amount={!isNaN(supplier) ? supplier : 0}
            theme="default"
          />
          <ResultItem
            label={Data.RESULT.QUOTATION}
            amount={!isNaN(quotation) ? quotation : 0}
            theme="default"
          />
          <ResultItem
            label={Data.RESULT.EXPEDITING}
            amount={!isNaN(expediting) ? expediting : 0}
            theme="default"
          />
          <ResultItem
            label={Data.RESULT.PROCESSING}
            amount={!isNaN(processing) ? processing : 0}
            theme="default"
          />
          <ResultItem
            label={Data.RESULT.PAYING}
            amount={!isNaN(paying) ? paying : 0}
            theme="default"
          />
          <ResultItem
            label={Data.RESULT.TOTAL}
            amount={!isNaN(grandTotal) ? grandTotal : 0}
            theme="highlight"
          />

          <a
            onClick={props.next}
            className="red-button-secondary mt-5 inline-block cursor-pointer text-lg"
          >
            {Data.SEND_REPORT}
          </a>
        </div>
      </div>
    </div>
  );
};
