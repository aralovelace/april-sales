import React from "react";
import { ResultData } from "../data";

export const Result = (props: { next: any; previous: any }) => {
  return ( <div className="block w-full">
    <h2 className="text-center text-2xl font-medium text-bridge-red">
      CALCULATING YOUR TOTAL COSTS - YOUR RESULTS
    </h2>
    <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-between">
      <div className="w-9/12 lg:w-1/2 pr-10 mx-auto">
        <p className="text-2xl text-bridge-red font-semibold">{ResultData.DESC}</p>
        <p className="text-bridge-black text-base mt-8">{ResultData.SUBTITLE}</p>
        <a onClick={props.previous} className="red-button cursor-pointer inline-block mt-5">
          Go Back
        </a>
      </div>
      <div className="w-9/12 lg:w-1/2 mx-auto">

        <a onClick={props.next} className="red-button cursor-pointer inline-block mt-5">
          Send me this report
        </a>

      </div>
    </div>
  </div>);
}
