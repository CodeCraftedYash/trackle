import React from 'react';
import { motion } from 'motion/react';
import { keyFeaturesContent } from './keyFeaturesContents'
const KeyFeatures: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=' w-full min-h-40 bg-[var(--color-background)] mt-12'>
            <h1 className='text-lg font-bold lg:text-2xl text-[var(--color-text)]'>Key Features</h1>
            <h2 className='text-sm lg:text-sm'>Trackle offers a comprehensive suite of tools to enhance your teaching experience.</h2>
            <div className='w-full flex  justify-between gap-2 mt-4'>
                {
                    keyFeaturesContent.map((item, index) => (
                        <div key={index} className=' border-2 border-[var(--color-border)]  min-h-[4rem] p-3'>
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