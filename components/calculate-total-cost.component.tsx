import React from 'react';
import { SalesItemsData } from '../data';
import { Formik } from 'formik';
import { useCalculateTotalCostEffect } from './calculate-total-cost.effect';

export const CalculateTotalCost = (props: { next: any; previous: any }) => {
  const { createSales, overAllTotal } = useCalculateTotalCostEffect();

  return (
    <section className="block">
      <Formik
        initialValues={{ salesItemSelected: [] }}
        onSubmit={(values) => {
          createSales(values.salesItemSelected as any);
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form
              method="post"
              onChangeCapture={(e) => {
                handleSubmit();
              }}
            >
              <h2 className="text-center text-2xl font-medium text-bridge-red">
                CALCULATING YOUR TOTAL COSTS
              </h2>
              <div className="mx-auto mt-9 flex flex-wrap justify-center ">
                {SalesItemsData.map((item, index) => (
                  <div key={index} className="bg-checkbox">
                    <label className="block h-full w-full cursor-pointer">
                      <input
                        type="checkbox"
                        name="salesItemSelected"
                        value={item.id}
                        onChange={handleChange}
                      />
                      <div className="">
                        <div className="check_img h-8 w-8"></div>
                        <span className="block">{item.label}</span>
                        <div className="">
                          <p className="text-xs text-bridge-light-purple">
                            Estimate
                          </p>
                          <p className="text-center text-xs">
                            £ {item.cost.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-5 flex flex-wrap justify-center">
                <div className="mr-5 block h-check-buttons w-check-buttons"></div>
                <div className="bg-text-button">
                  <p className=" font-bold">TOTAL</p>
                  <p className="text-3xl text-bridge-red">
                    £ {overAllTotal.toFixed(2)}
                  </p>
                </div>
                <div className="mr-5 block flex h-check-buttons w-check-buttons items-center justify-center">
                  <a onClick={props.next} className="red-button cursor-pointer">
                    Continue
                  </a>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};
