import React from 'react';

export const ResultItem = (props: {
  label: string;
  amount: number;
  theme: string;
}) => {
  const boxTheme =
    props.theme === 'default'
      ? 'bg-white text-bridge-black'
      : 'bg-bridge-purple text-white';

  const amountTheme =
    props.theme === 'default'
      ? 'bg-bridge-red text-white'
      : 'bg-white text-bridge-purple';

  return (
    <div className="flex w-full flex-row mb-2.5">
      <div
        className={`${boxTheme} w-8/12 rounded-l-full px-5 py-2 text-base`}
      >
        {props.label}
      </div>
      <div
        className={`w-4/12 rounded-r-full px-5 py-2 ${amountTheme} text-base`}
      >
        £ {(props.amount.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </div>
  );
};
