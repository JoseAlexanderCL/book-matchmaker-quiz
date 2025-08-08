export const expand = {
  initial: { height: 0 },
  animate: { height: "auto", transition: { duration: 0.5, delay: 0.2 } },
  exit: { height: 0, transition: { duration: 0.5, delay: 0 } },
};

export const opacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.5, delay: 0 } },
};
