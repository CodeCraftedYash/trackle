import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useDialogStore } from '../../store/dialogStore';
import { progressBarVariant } from '../../variants/progressBarVariant';

interface DialogBoxProps {
  message?: string;
  title?: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({ message,title }) => {
  const isOpen = useDialogStore(state => state.isOpen);
  const setIsOpen = useDialogStore(state => state.setIsOpen);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, setIsOpen]);

  return (
    isOpen && (
      <div className='absolute top-[50%] left-[50%] -translate-[50%] aspect-video w-[40rem] bg-[var(--color-surface)] z-50 border-4 border-[var(--color-border)] transition-all duration-300 ease-in-out flex-co items-center justify-center rounded-xl text-center text-[var(--color-text)] '>
        <h1 className='text-xl w-full border-b-4 border-[var(--color-border)] py-4 bg-[var(--color-accent)] rounded-xl font-bold'>{title ? title:"Notification !"}</h1>
        <h2 className='text-lg mt-4 font-semibold'>{message ? message:"please try again"}</h2>
        <div className='absolute bottom-1 w-full border-2 overflow-hidden h-[1rem]'>
            <motion.div className='absolute h-[1rem] bg-green-500'
            variants={progressBarVariant} animate="animate" initial="initial" exit="exit"
            ></motion.div>
        </div>
      </div>
    )
  );
};

export default DialogBox;
