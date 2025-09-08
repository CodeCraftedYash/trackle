import React, { useState } from 'react'
import UserCard from '../../components/user/UserCard'
import { useAuthStore } from '../../store/authStore'
import HomeWork from '../../components/user/HomeWork';
import PerformanceChart from '../../components/user/PerformanceChart';
import ScoreDetails from '../../components/user/ScoreDetails';
import { motion } from 'motion/react'
import { usePerformanceStore } from '../../store/performanceStore';
import HomeWorkSlider from '../../components/user/HomeWorkSlider';
import { filterHw } from '../../components/user/filteredHwList';

const UserLayout: React.FC = () => {
  const [direction, setDirection] = useState<"next" | "prev">("prev")
  const { dailyScore } = usePerformanceStore();
  const filteredHw = filterHw();
  const todayDate = new Date().getDate() - 1;
  const currentMonth = new Date().toLocaleString("default", { month: "long" })
  const todayIndex = filteredHw.findIndex(item => item.index == todayDate)
  const [hwIndex, setHwIndex] = useState<number>(todayIndex >= 0 ? todayIndex : 0);
  const student = useAuthStore().user;

  if (!student) {
    return;
  }

  return (
    <div className='flex flex-col items-center min-h-[100dvh] bg-[var(--color-background)] overflow-y-hidden overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row lg:justify-start lg:mt-4 flex-nowrap items-center justify-between w-full lg:w-[90%]'>
        <motion.div className='flex flex-col items-center w-fit py-4'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='w-fit flex flex-col items-center'>
            <UserCard {...student} />
            <h2 className='mt-2 font-semibold italic text-[var(--color-text)]' style={{ fontSize: "var(--font-size-base)" }}>{student.name}</h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='w-full overflow-y-hidden flex flex-row-reverse px-4 items-start justify-between gap-2 h-[12rem] sm:h-[11rem] md:h-[13.5rem] lg:h-[13rem] '>

          <div className=' px-4 md:px-0 flex flex-col items-center justify-between w-[70%] min-h-fit'>
            <HomeWork todayHW={filteredHw[hwIndex].hw} title="Home Work" direction={direction} hwIndex={hwIndex} />
            <HomeWorkSlider setHwIndex={setHwIndex} hwIndex={hwIndex} setDirection={setDirection} direction={direction} />
          </div>

          <div className='lg:hidden w-1/3'><ScoreDetails score={dailyScore} /></div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-[90%] px-4  lg:flex lg:flex-row items-start gap-4 mt-8">
        <div className="hidden lg:block w-[30%] h-full "><ScoreDetails score={dailyScore} divHeight={"20.5rem"} /></div>
        <div className="w-full lg:w-[70%] h-[300px] lg:h-[400px] ">
          <PerformanceChart dailyScore={dailyScore} date={`${todayDate + 1} ${currentMonth}`} />
        </div>
      </motion.div>
    </div>
  )
}

export default UserLayout