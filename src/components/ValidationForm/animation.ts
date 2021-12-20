export const dropBarVariants = {
  expanded: {
    width: "200%",
    height: "80rem",
    borderRadius: "20%",
    transform: "rotate(-5deg)",
    top: "-5rem",
  },
  collapsed: {
    width: "200%",
    height: "50rem",
    borderRadius: "50%",
    transform: "rotate(-5deg)",
  },
};

export const expandingTransition = {
  type: "spring",
  duration: 2.2,
  stiffness: 30,
};
