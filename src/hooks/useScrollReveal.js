// Shared Framer Motion scroll-reveal configuration
export const revealVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
      delay: delay * 0.001, // convert ms to seconds
    },
  }),
}

export const viewportConfig = { once: true, amount: 0.08 }
