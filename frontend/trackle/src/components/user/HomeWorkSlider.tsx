import React from 'react'
import { LuCircleArrowLeft } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";
import { filterHw } from './filteredHwList';
import { slideVariant } from '../../variants/slideVariant';

type Props = {
    setHwIndex: React.Dispatch<React.SetStateAction<number>>;
    hwIndex: number;
    setDirection: React.Dispatch<React.SetStateAction<"next"|"prev">>;
    direction:"next"|"prev";
}
const HomeWorkSlider: React.FC<Props> = ({ setHwIndex, hwIndex, direction, setDirection }) => {
    const filteredHw: { index: number, hw: string, month: string }[] = filterHw();
    const size = filteredHw.length;
    const today = new Date().getDate() - 1;
    const todayIndex: number = filteredHw.findIndex(item => item.index == today)
    const handleNext = () => {
        if (size === 0 || todayIndex === -1) return;
        setDirection("next");
        setHwIndex(prev => {
            if (prev === todayIndex) return prev;
            const newIndex = (prev + 1) % size;
            if (newIndex === todayIndex) return todayIndex;
            return newIndex;
        });
    };

    const handlePrev = () => {
        if (size === 0 || todayIndex === -1) return;
        setDirection("prev")
        setHwIndex(prev => {
            const newIndex = (prev - 1 + size) % size;
            if (newIndex === todayIndex) return prev;
            return newIndex;
        });
    };

    return (
        <div className='mt-2 flex justify-between items-center w-full overflow-x-hidden min-h-fit'>
            <LuCircleArrowLeft className='bg-[var(--color-accent)] text-[var(--color-text)] rounded-full text-xl md:text-4xl hover:cursor-pointer' onClick={handlePrev} />
            <AnimatePresence mode='wait' custom={direction}>
            <motion.span className='text-sm '
            key={hwIndex}
            variants={slideVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            >{filteredHw[hwIndex].index + 1} <span>{filteredHw[hwIndex].month}</span></motion.span>
            </AnimatePresence>
            <LuCircleArrowLeft className='bg-[var(--color-accent)] text-[var(--color-text)] rounded-full text-xl md:text-4xl rotate-180 hover:cursor-pointer' onClick={handleNext} />
        </div>
    )
}

export default HomeWorkSlider