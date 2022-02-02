import React, { useState } from 'react';
import { Data, ResultData, transitionStyles } from '../data';
import { Transition } from 'react-transition-group';
import { useCompletedEffect } from './completed.effect';

export const Completed = (props: { next: any }) => {
  const duration = 500;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const [inButton, setInButton] = useState(false);

  const { clearForm } = useCompletedEffect();
  clearForm();
  setTimeout(setInButton, duration, true);

  return (
    <div className="block w-full">
      <h2 className="text-center text-2xl font-medium text-bridge-red">
        {Data.TITLE}
      </h2>
      <div className="mx-auto mt-20 mb-20 flex w-full max-w-xl flex-col justify-center">
        <p className="text-center text-2xl font-semibold text-bridge-red">
          {ResultData.COMPLETED}
        </p>
        <div className="flex w-full justify-center">
          <Transition in={inButton} timeout={duration}>
            {(state) => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <a
                  onClick={props.next}
                  className="red-button-secondary mt-10 mt-5 block cursor-pointer"
                >
                  {Data.RESTART}
                </a>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
};
