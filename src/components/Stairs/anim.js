export const expand = {
  initial: { height: 0 },
  // Keep the columns collapsed until the exit animation is triggered
  animate: { height: 0 },
  // Expand to cover the screen when exiting the view
  exit: { height: "100%", transition: { duration: 0.65, delay: 0, ease: [0.22, 0.61, 0.36, 1] } },
};

export const opacity = {
  initial: { opacity: 0 },
  // Hide the columns while the page is visible
  animate: { opacity: 0 },
  // Fade in the columns during the exit transition
  exit: { opacity: 1, transition: { duration: 0.65, delay: 0, ease: [0.22, 0.61, 0.36, 1] } },
};
