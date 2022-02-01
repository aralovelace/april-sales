import React, { useState } from 'react';
import {
  CalculateTotalCost,
  AnnualTotalCost,
  Result,
  Completed,
} from '../components';
import { DefaultTemplate } from '../templates/default.template';

const Home = () => {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);

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

  return (
    <DefaultTemplate>
      {page1 && <CalculateTotalCost previous={null} next={togglePage2} />}
      {page2 && <AnnualTotalCost previous={togglePage1} next={togglePage3} />}
      {page3 && <Result previous={togglePage2} next={togglePage4} />}
      {page4 && <Completed next={togglePage1} />}
    </DefaultTemplate>
  );
};

export default Home;
