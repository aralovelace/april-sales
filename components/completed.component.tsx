import React from 'react';
import { ResultData } from '../data';

export const Completed = (props: { next: any }) => {
  return (
    <div className="block w-full">
      <h2 className="text-center text-2xl font-medium text-bridge-red">
        CALCULATING YOUR TOTAL COSTS
      </h2>
      <div className="mt-20 mb-20 flex w-full flex-col justify-center">
        <p className="text-center text-2xl font-semibold text-bridge-red">
          {ResultData.COMPLETED}
        </p>
        <a
          onClick={props.next}
          className=" red-button mt-10 mt-5 block w-20 cursor-pointer"
        >
          Restart
        </a>
      </div>
    </div>
  );
};
