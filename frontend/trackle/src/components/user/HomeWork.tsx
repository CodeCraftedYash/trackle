import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { slideVariant } from '../../variants/slideVariant';

type HomeWorkProps = {
  todayHW?: string;
  title?: string
  direction: "next" | "prev";
  hwIndex: number;
}

const HomeWork: React.FC<HomeWorkProps> = (({ todayHW, title, direction, hwIndex }) => {
  return (
    <div
      className='flex flex-col items-center mx-auto text-[var(--color-text)] w-full'
    >
      <h1
        style={{ fontSize: "var(--font-size-base)" }}
        className='bg-[var(--color-surface)] font-bold text-nowrap p-2 w-full text-center whitespace-nowrap rounded-lg text-[var(--color-text-heading)]'
      >
        {title ? title : "Today's Home Work"}
      </h1>
      <div className=' mt-4 p-2 px-4 rounded-lg overflow-hidden border-2 w-[100%]'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.p
            className=' h-[5rem] text-wrap text-center'
            style={{ fontSize: "var(--font-size-base)" }}
            key={hwIndex}
            variants={slideVariant}
            animate="animate"
            initial="initial"
            exit="exit"
            custom={direction}
          >
            {todayHW ? todayHW : "No homework assigned for today"}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
)

export default HomeWork
