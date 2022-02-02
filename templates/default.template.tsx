import React from 'react';

export const DefaultTemplate = (props: { children: any }) => {
  return (
    <>
      <title>Bridge</title>
      <main className="content">
        <div
          className="z-10 mx-auto block flex h-screen w-full
          max-w-screen-xl items-center justify-center"
        >
          <div className="w-full"> {props.children} </div>
        </div>
      </main>
    </>
  );
};
