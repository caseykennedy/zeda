const polyVariant = {
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

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.0375, delayChildren: 0.05 },
  },
}

const viewport = {
  once: true,
  amount: 0.25,
}

const upVariants = {
  up: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  down: {
    y: 15,
    opacity: 0,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
}

export { polyVariant, staggerItems, upVariants, viewport }
