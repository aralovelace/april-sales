import React from 'react';

export const SliderForm = (props: {
  label: string;
  name: string;
  previous: any;
  next: any;
  handleChange: any;
  page: number;
}) => {
  return (
    <div className="flex flex-row items-start justify-between">
      <a onClick={props.previous} className="mt-10 block w-10 cursor-pointer">
        <div className="h-10 w-10 rounded-full bg-bridge-red pt-0.5 text-center text-3xl text-white">
          {' '}
          &lt;{' '}
        </div>
      </a>
      <div className="sliding-label">
        <label>{props.label}</label>
        <small className="text-bridge-grey text-center block">
          <span className="font-semibold">{props.page}</span> of{' '}
          <span className="font-semibold">3</span>
        </small>
      </div>
      <a onClick={props.next} className="mt-10 block w-10 cursor-pointer">
        <div className="h-10 w-10 rounded-full bg-bridge-red pt-0.5 text-center text-3xl text-white">
          {' '}
          &gt;{' '}
        </div>
      </a>
      <div className="mt-10 flex items-center justify-between">
        <input
          type="number"
          name={props.name}
          defaultValue=""
          onKeyUp={props.handleChange}
        />
      </div>
    </div>
  );
};
