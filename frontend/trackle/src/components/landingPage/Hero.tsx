import React from 'react'
import HeroImg from '../../assets/Hero.webp'
const Hero:React.FC = () => {
  return (
     <div className='relative'>
                <div className='w-full h-[12rem] lg:h-[28rem] mx-auto rounded-xl'
                style={{
                    backgroundImage:`url(${HeroImg})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    
                }}>
                </div>
                <h1 className='font-bold text-[1.3rem] lg:text-[1.7rem] w-[14rem] lg:w-[20rem] absolute bottom-8 lg:bottom-20 right-5 lg:right-36'>Empower Your Teaching with Trackle</h1>

                <p className='text-[0.5rem] lg:text-[0.9rem] absolute bottom-1 lg:bottom-4 right-2 lg:right-28 w-[20rem] lg:w-[36rem]'>Trackle is the all-in-one platform designed to streamline your teaching workflow from managing student to tracking progress and fostering collaboration. Spend less time on administrative time inspiring students.</p>
            </div>
  )
}

export default Hero