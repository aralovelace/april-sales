import React, { useState } from 'react';
import { AnnualItemsData } from '../data';
import { SliderForm } from './slider-form.component';
import { Formik } from 'formik';

export const AnnualTotalCost = (props: { next: any; previous: any}) => {
  const [totalCost_1, setTotalCost_1] = useState(true);
  const [totalCost_2, setTotalCost_2] = useState(false);
  const [totalCost_3, setTotalCost_3] = useState(false);

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

  return (
    <div className="block w-full">
      <h2 className="text-center text-2xl font-medium text-bridge-red">
        CALCULATING YOUR TOTAL COSTS
      </h2>
      <Formik
        onSubmit={(values) => {
          console.log(values.annualSpendIndustrial);
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
              onKeyUpCapture={(e) => {
                handleSubmit();
              }}
            >
              <div className="mt-20 mb-20">
                {totalCost_1 && (
                  <SliderForm
                    label={AnnualItemsData.annual.label}
                    name={AnnualItemsData.annual.name}
                    previous={props.previous}
                    next={toggleTotalCost2}
                    handleChange={handleChange}
                    page={1}
                  />
                )}
                {totalCost_2 && (
                  <SliderForm
                    label={AnnualItemsData.unique.label}
                    name={AnnualItemsData.unique.name}
                    previous={toggleTotalCost1}
                    next={toggleTotalCost3}
                    handleChange={handleChange}
                    page={2}
                  />
                )}
                {totalCost_3 && (
                  <SliderForm
                    label={AnnualItemsData.supplier.label}
                    name={AnnualItemsData.supplier.name}
                    previous={toggleTotalCost2}
                    next={props.next}
                    handleChange={handleChange}
                    page={3}
                  />
                )}
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
