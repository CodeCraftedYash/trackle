import React from 'react';
import { motion } from 'motion/react';
import { benefitContent } from './benefitContent';

const BenefitsForTeacher: React.FC = () => {
  return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=' w-full min-h-40  text-center pt-4 '>
            <div className=' bg-[var(--color-surface)] py-4 rounded-xl mb-8 w-[80%] mx-auto'>
            <h1 className='text-lg font-bold text-[var(--color-text-heading)] mb-1 px-2 ' style={{fontSize:"var(--font-size-large)"}}>Benefits For Teacher</h1>
            </div>
            <h2 className='text-[var(--color-text)] mx-auto w-[80%] mb-8' style={{fontSize:"var(--font-size-small)"}}>Trackle is designed to make your life easier and more efficient.</h2>
            <div className='w-full flex  justify-between gap-2 mt-4 flex-col md:mt-10'>
                {
                    benefitContent.map((item, index) => (
                        <div className='flex w-full mb-12 lg:justify-between lg:items-start'>
                        <div key={index} className='flex flex-col  lg:mt-8 w-full sm:mx-auto'>
                            <h1 className='text-[var(--color-text-heading)] bg-[var(--color-surface)] rounded-xl font-thin w-[60%] px-2 py-4 mx-auto text-wrap' style={{fontSize:"var(--font-size-semi-large)"}}>{item.heading}</h1>

                            <img src={item.src} alt={item.alt} loading="lazy" className='lg:hidden w-[55%] max-w-[56%] sm:w-[43%]  md:w-[25%] mx-auto my-4 lg:my-0' />

                            <p className='font-light lg:mt-12 sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[100%]' style={{fontSize:"var(--font-size-base)"}}>{item.body}</p>
                        </div>
                        <img src={item.src} alt={item.alt} className='w-[25%] hidden lg:block' />
                        </div>
                    ))
                }
            </div>
        </motion.div>
  )
}

export default BenefitsForTeacher