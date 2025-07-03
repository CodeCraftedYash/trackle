import React from 'react';
import { benefitContent } from './benefitContent';

const BenefitsForTeacher:React.FC = () => {
  return (
    <div className='w-full mt-12'>
        <h1 className='text-lg font-bold '>Benefits for Teachers</h1>
        <h3 className='text-xs lg:text-sm mb-2'>Trackle is designed to make your life easier and more efficient</h3> 
         <div className='flex flex-col lg:flex-row w-[80%] lg:w-full lg:gap-4 mx-auto'>
            {benefitContent.map((item,index)=>(
              <div className='my-8 lg:w-auto' key={index}>                
                <img src={item.src} alt={item.alt} className='rounded-xl mx-auto w-full h-[70%]' loading='lazy'/>
                <div>
                    <h2 className='mt-2 mb-1'>{item.heading}</h2>
                    <p className='text-xs'>{item.body}</p>
                </div>
              </div>

            ))}
         </div>
    </div>
  )
}

export default BenefitsForTeacher