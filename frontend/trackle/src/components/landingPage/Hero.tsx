import React from 'react'
import {motion} from 'motion/react';
import HeroImg from '../../assets/Hero.webp'
const Hero:React.FC = () => {
  return (
     <motion.div className='relative w-full'
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.2 }}
     >
                <div className='w-full h-[12rem] lg:h-[28rem] mx-auto rounded-xl'
                style={{
                    backgroundImage:`url(${HeroImg})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    
                }}>
                </div>
                <h1 className='font-bold text-[1.3rem] lg:text-[1.7rem] w-[14rem] lg:w-[20rem] absolute bottom-8 lg:bottom-20 right-5 lg:right-36 text-shadow-lg text-shadow-black/20 mb-1'>Empower Your Teaching with Trackle</h1>

                <p className='text-[0.5rem] lg:text-[0.9rem] absolute bottom-1 lg:bottom-4 right-2 lg:right-28 w-[80%] lg:w-[36rem] text-shadow-lg text-shadow-black/20'>Trackle is the all-in-one platform designed to streamline your teaching workflow from managing student to tracking progress and fostering collaboration. Spend less time on administrative time inspiring students.</p>
            </motion.div>
  )
}

export default Hero