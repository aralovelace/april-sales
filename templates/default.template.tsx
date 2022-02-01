import React from 'react';

export const DefaultTemplate = (props:{ children: any }) => {
  return (
    <main className="content">

      <div
        className="z-10 mx-auto block flex h-screen w-full
          max-w-screen-xl items-center justify-center"
      >
        {props.children}
      </div>
    </main>
  );
};
