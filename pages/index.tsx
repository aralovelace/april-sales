import React, { useState } from 'react';
import {
  CalculateTotalCost,
  AnnualTotalCost,
  Result,
  Completed,
} from '../components';
import { DefaultTemplate } from '../templates/default.template';
import { Transition } from 'react-transition-group';
import { transitionStyles } from '../data';
const Home = () => {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);
  const [page2Return, setPage2Return] = useState('start');

  const togglePage1 = () => {
    setPage1(true);
    setPage2(false);
    setPage3(false);
    setPage4(false);
  };
  const togglePage2 = () => {
    setPage1(false);
    setPage2(true);
    setPage3(false);
    setPage4(false);
  };
  const togglePage3 = () => {
    setPage1(false);
    setPage2(false);
    setPage3(true);
    setPage4(false);
  };
  const togglePage4 = () => {
    setPage1(false);
    setPage2(false);
    setPage3(false);
    setPage4(true);
  };

  const duration = 800;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <DefaultTemplate>
      <Transition in={page1} timeout={duration}>
        {(state) => (
          <div
            className="w-full"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {page1 && <CalculateTotalCost previous={null} next={togglePage2} setPage2Return={setPage2Return} />}
          </div>
        )}
      </Transition>
      <Transition in={page2} timeout={duration}>
        {(state) => (
          <div
            className="mx-auto w-9/12"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {page2 && (
              <AnnualTotalCost previous={togglePage1} next={togglePage3} return={page2Return} />
            )}
          </div>
        )}
      </Transition>
      <Transition in={page3} timeout={duration}>
        {(state) => (
          <div
            className="mx-auto w-full"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {page3 && <Result previous={togglePage2} next={togglePage4} setPage2Return={setPage2Return} />}
          </div>
        )}
      </Transition>

      <Transition in={page4} timeout={duration}>
        {(state) => (
          <div
            className="mx-auto w-full"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {page4 && <Completed next={togglePage1} />}
          </div>
        )}
      </Transition>
    </DefaultTemplate>
  );
};

export default Home;
