import React from 'react';
import { motion } from 'motion/react';
import { keyFeaturesContent } from './keyFeaturesContents'
const KeyFeatures: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=' w-full min-h-40  text-center pt-4 '>
            <div className=' bg-[var(--color-surface)] py-4 rounded-xl mb-8 w-[80%] mx-auto'>
                <h1 className='text-lg font-bold text-[var(--color-text-heading)] mb-1  ' style={{ fontSize: "var(--font-size-large)" }}>Key Features</h1>
            </div>
            <h2 className='text-[var(--color-text)] mx-auto w-[80%] mb-8' style={{ fontSize: "var(--font-size-small)" }}>Trackle offers a comprehensive suite of tools to enhance your teaching experience.</h2>
            <div className='w-full flex  justify-between gap-2 mt-4 flex-col md:mt-10'>
                {
                    keyFeaturesContent.map((item, index) => (
                        <div className='flex w-full mb-12 lg:justify-between lg:items-start' key={index}>
                            <div className='flex flex-col  lg:mt-8 w-full sm:mx-auto'>
                                <h1 className='text-[var(--color-text-heading)] bg-[var(--color-surface)] rounded-xl font-thin w-[60%] px-2 py-4 mx-auto text-wrap ' style={{ fontSize: "var(--font-size-semi-large)" }}>{item.title}</h1>

                                <img src={item.imgSrc} alt={item.title} loading="lazy" className='lg:hidden w-[55%] max-w-[56%] sm:w-[43%]  md:w-[25%] mx-auto my-4 lg:my-0' />

                                <p className='font-light lg:mt-12 sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[100%]' style={{ fontSize: "var(--font-size-base)" }}>{item.body}</p>
                            </div>
                            <img src={item.imgSrc} alt={item.title} className='w-[25%] hidden lg:block' />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default KeyFeatures