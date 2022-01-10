export const slideBarVariants = {
  expanded: {
    width: "200%",
    height: "30rem",
    borderRadius: "20%",
    transform: "rotate(-5deg)",
    top: "-5rem",
  },
  collapsed: {
    width: "100%",
    height: "35rem",
    borderRadius: "50%",
    transform: "rotate(0deg)",
  },
};

export const expandingTransition = {
  type: "spring",
  duration: 2.0,
  stiffness: 30,
};
