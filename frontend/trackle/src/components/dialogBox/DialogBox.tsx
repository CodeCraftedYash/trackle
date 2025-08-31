import React, { useEffect } from 'react';
import { motion } from 'motion/react'
import { useDialogStore } from '../../store/dialogStore';
import { progressBarVariant } from '../../variants/progressBarVariant';

const DialogBox: React.FC = () => {
  const { isOpen, message, title, closeDialog } = useDialogStore();

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      closeDialog();
    }, 1200);
    return () => clearTimeout(timer);
  }, [isOpen, closeDialog]);

  if (!isOpen) return null;

  return (
    <div className='absolute top-[50%] left-[50%] -translate-[50%] aspect-video w-[20rem] lg:w-[40rem] bg-white z-50 border-4 border-[var(--color-border)] transition-all duration-300 ease-in-out flex-co items-center justify-center rounded-xl text-center text-[var(--color-background)] '>
      <h1 className=' w-full border-b-2 border-[var(--color-border)] py-4 font-bold' style={{fontSize:"var(--font-size-large)"}}>
        {title}
      </h1>
      <h2 className='text-lg mt-4 font-semibold'style={{fontSize:"var(--font-size-base)"}}>{message}</h2>
      <div className='absolute bottom-1 w-full border-2 overflow-hidden h-[1rem]'>
        <motion.div
          className='absolute h-[1rem] bg-green-500'
          variants={progressBarVariant}
          animate='animate'
          initial='initial'
          exit='exit'
        />
      </div>
    </div>
  );
};

export default DialogBox;
