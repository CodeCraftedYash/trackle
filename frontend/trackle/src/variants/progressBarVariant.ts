import { easeInOut } from "motion";

export const progressBarVariant = {
    initial: {
        width: '0%',
    },
    animate: {
        width: '100%',
        transition: {
            duration: 2,
            ease: easeInOut,
        }
    },
    exit: {
        width: '0%',
         transition: {
            duration: 1,
            ease: easeInOut,
        }
    },
}