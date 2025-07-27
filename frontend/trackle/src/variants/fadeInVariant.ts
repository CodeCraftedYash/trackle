import { easeInOut } from "motion";

export const fadeIn = {
    initial: {
        opacity: '0%',
    },
    animate: {
        opacity: '100%',
        transition: {
            duration: 0.3,
            ease: easeInOut,
        }
    },
    exit: {
        opacity: '0%',
         transition: {
            duration: 0.1,
            ease: easeInOut,
        }
    },
}