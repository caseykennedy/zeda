const polyVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      stiffness: 100,
      velocity: -10,
      type: 'spring',
      damping: 35,
    },
  },
  hidden: {
    y: 15,
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

const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
}

const letterVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

export {
  letterVariants,
  polyVariant,
  sentenceVariants,
  staggerItems,
  upVariants,
  viewport,
}
