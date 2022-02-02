import React from 'react';
import { Data, SalesItemsData } from "../data";
import { Formik } from 'formik';
import { useCalculateTotalCostEffect } from './calculate-total-cost.effect';

export const CalculateTotalCost = (props: { next: any; previous: any,setPage2Return: any; }) => {
  const { createSales, overAllTotal, salesTotalState } =
    useCalculateTotalCostEffect();
  props.setPage2Return('start');

  return (
    <section className="block">
      <Formik
        initialValues={{
          salesItemSelected: salesTotalState
            ? salesTotalState.sales?.selected
            : [],
        }}
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
                {Data.TITLE}
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
                        defaultChecked={
                          salesTotalState && salesTotalState.sales
                            ? salesTotalState.sales.selected.includes(
                                item.id.toString()
                              )
                            : false
                        }
                        checked={
                          salesTotalState && salesTotalState.sales
                            ? salesTotalState.sales.selected.includes(
                                item.id.toString()
                              )
                            : false
                        }
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
                  <p className=" font-bold">{Data.TOTAL}</p>
                  <p className="text-3xl text-bridge-red">
                    £ {overAllTotal.toFixed(2)}
                  </p>
                </div>
                <div className="mr-5 block flex h-check-buttons w-check-buttons items-center justify-center">
                  <input
                    type="submit"
                    onClick={props.next}
                    value={Data.CON_BTN}
                    className="red-button mt-8 cursor-pointer"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};
