export const tapAnimationVariant = {
   tap: {
    scale: 0.9,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 20,
    },
  },
  rest: {
    scale: 1,
    transition: {
      type: "spring" as const ,
      stiffness: 300,
      damping: 20,
    },
  }
} as const ;