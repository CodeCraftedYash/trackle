import React from 'react';
import { motion } from 'motion/react';
import { keyFeaturesContent } from './keyFeaturesContents'
const KeyFeatures: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=' w-full min-h-40 bg-[var(--color-background)] text-center border-t-2 pt-4 lg:pt-12 border-white/20'>
            <h1 className='text-lg font-bold lg:text-2xl text-[var(--color-text)] mb-1' style={{fontSize:"var(--font-size-large)"}}>Key Features</h1>
            <h2 className='text-sm lg:text-sm w-[95%] mx-auto' style={{fontSize:"var(--font-size-base)"}}>Trackle offers a comprehensive suite of tools to enhance your teaching experience.</h2>
            <div className='w-full flex  justify-between gap-2 mt-4 flex-col md:flex-row md:mt-10'>
                {
                    keyFeaturesContent.map((item, index) => (
                        <div key={index} className=' border-2 border-[var(--color-border)] w-[90%] mx-auto  min-h-[10rem] p-3 lg:p-12'>
                            <h1 className='font-medium mb-2' style={{fontSize:"var(--font-size-semi-large)"}}>{item.title}</h1>
                            <p className='font-light' style={{fontSize:"var(--font-size-base)"}}>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default KeyFeatures