export const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const transitionLinearStyles: any = {
  entering: { transform: 'translateX(40px)' , opacity: 1 },
  entered: { transform: 'translateX(0px)' , opacity: 1 },
  exiting: { transform: 'translateX(40px)', opacity: 0 },
  exited: { transform: 'translateX(0px)', opacity: 0 },
};
