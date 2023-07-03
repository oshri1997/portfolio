export const textSlideLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    x: -300,
    transition: {
      opacity: { duration: 1.5 },
    },
  },
};
export const textSlideRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      opacity: { duration: 1.5 },
    },
  },
};

export const skillList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 0,
    },
  },
};

export const skillItem = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: 0,
    opacity: 0,
  },
};

export const projectList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 0,
    },
  },
};

export const projectItem = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 300,
    opacity: 0,
  },
};
