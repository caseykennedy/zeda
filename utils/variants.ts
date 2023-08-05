export const polyVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      stiffness: 100,
      velocity: -100,
    },
  },
  hidden: {
    y: 25,
    opacity: 0,
    transition: {},
  },
}

export const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const viewport = {
  once: true,
  amount: 0.25,
}
