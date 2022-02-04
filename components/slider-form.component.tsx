import React from 'react';

export const SliderForm = (props: {
  label: string;
  name: string;
  previous: any;
  next: any;
  handleChange: any;
  page: number;
  defaultValue: any;
}) => {
  return (
    <div className="flex w-full flex-row items-start justify-between">
      <a
        onClick={props.previous}
        className="mt-10 mr-5 block w-10 cursor-pointer"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bridge-red pt-0.5 text-center text-3xl text-white">
          <img src="/icons/previous-arrow.svg" className="h-5 w-4" />
        </div>
      </a>
      <div className="sliding-label">
        <label>{props.label}</label>
        <small className="block text-center text-bridge-grey">
          <span className="font-semibold">{props.page}</span> of{' '}
          <span className="font-semibold">3</span>
        </small>
      </div>
      <a onClick={props.next} className="mx-5 mt-10 block w-10 cursor-pointer">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bridge-red pt-0.5 text-center text-3xl text-white">
          <img src="/icons/next-arrow.svg" className="h-5 w-4" />
        </div>
      </a>
      <div className="mt-3 flex items-start justify-between">
        <input
          type="number"
          name={props.name}
          defaultValue={props.defaultValue}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};
