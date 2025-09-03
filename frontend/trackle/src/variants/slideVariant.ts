import { type Variants } from "motion/react";

export const slideVariant:Variants = {
  initial: (direction: "next" | "prev") => ({
    x: direction == "next" ? "-100%" : "100%",
    opacity: 0,
  }),
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: .3,
      ease: "easeInOut" as const,
    },
  },
  exit: (direction: "next" | "prev") => ({
    x: direction =="next" ? "100%" : "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  })
};
