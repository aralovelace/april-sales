import React, { useState } from 'react';
import { AnnualItemsData, Data } from "../data";
import { SliderForm } from './slider-form.component';
import { Formik } from 'formik';
import { AnnualTotalCostEffect } from './annual-total-cost.effect';
import { Transition } from 'react-transition-group';

export const AnnualTotalCost = (props: { next: any; previous: any, return: string }) => {
  const { createAnnualTotal, annualTotalState } = AnnualTotalCostEffect();

  const [totalCost_1, setTotalCost_1] = useState(props.return==='start' ? true : false);
  const [totalCost_2, setTotalCost_2] = useState(false);
  const [totalCost_3, setTotalCost_3] = useState(props.return!=='start' ? true : false);

  const toggleTotalCost1 = () => {
    setTotalCost_2(false);
    setTotalCost_1(true);
    setTotalCost_3(false);
  };
  const toggleTotalCost2 = () => {
    setTotalCost_2(true);
    setTotalCost_1(false);
    setTotalCost_3(false);
  };
  const toggleTotalCost3 = () => {
    setTotalCost_2(false);
    setTotalCost_1(false);
    setTotalCost_3(true);
  };

  const duration = 300;
  const defaultStyle = {
    transition: `all 1.5s linear`,
    opacity: 0  ,
  };

  const transitionStyles: any = {
    entering: { transform: 'translateX(40px)' , opacity: 1 },
    entered: { transform: 'translateX(0px)' , opacity: 1 },
    exiting: { transform: 'translateX(40px)', opacity: 0 },
    exited: { transform: 'translateX(0px)', opacity: 0 },
  };

  return (
    <div className="block w-full">
      <h2 className="text-center text-2xl font-medium text-bridge-red">
        {Data.TITLE}
      </h2>
      <Formik
        onSubmit={(values) => {
          createAnnualTotal(
            values.annualSpendIndustrial,
            values.numberUniqueOrders,
            values.numberSuppliers
          );
        }}
        initialValues={{
          annualSpendIndustrial: 0,
          numberUniqueOrders: 0,
          numberSuppliers: 0,
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
              <div className="mt-20 mb-20">
                <Transition in={totalCost_1} timeout={duration}>
                  {(state) => (
                    <div
                      className="w-full"
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                    >
                      {totalCost_1 && (
                        <SliderForm
                          label={AnnualItemsData.annual.label}
                          name={AnnualItemsData.annual.name}
                          previous={props.previous}
                          next={toggleTotalCost2}
                          handleChange={handleChange}
                          page={1}
                          defaultValue={
                            annualTotalState && annualTotalState?.annual
                              ? annualTotalState?.annual.toFixed(2)
                              : 0
                          }
                        />
                      )}
                    </div>
                  )}
                </Transition>

                <Transition in={totalCost_2} timeout={duration}>
                  {(state) => (
                    <div
                      className="w-full"
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                    >
                      {totalCost_2 && (
                        <SliderForm
                          label={AnnualItemsData.unique.label}
                          name={AnnualItemsData.unique.name}
                          previous={toggleTotalCost1}
                          next={toggleTotalCost3}
                          handleChange={handleChange}
                          page={2}
                          defaultValue={
                            annualTotalState && annualTotalState?.unique
                              ? annualTotalState?.unique.toFixed(2)
                              : 0
                          }
                        />
                      )}
                    </div>
                  )}
                </Transition>

                <Transition in={totalCost_3} timeout={duration}>
                  {(state) => (
                    <div
                      className="w-full"
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                    >
                      {totalCost_3 && (
                        <SliderForm
                          label={AnnualItemsData.supplier.label}
                          name={AnnualItemsData.supplier.name}
                          previous={toggleTotalCost2}
                          next={props.next}
                          handleChange={handleChange}
                          page={3}
                          defaultValue={
                            annualTotalState && annualTotalState?.supplier
                              ? annualTotalState?.supplier.toFixed(2)
                              : 0
                          }
                        />
                      )}
                    </div>
                  )}
                </Transition>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
