import React from 'react';
import { benefitContent } from './benefitContent';

const BenefitsForTeacher: React.FC = () => {
  return (
    <div className='w-full mt-12'>
      <h1 className='text-lg font-bold '>Benefits for Teachers</h1>
      <h3 className='text-xs lg:text-sm mb-2'>Trackle is designed to make your life easier and more efficient</h3>
      <div className='flex flex-col lg:flex-row w-[70%] sm:w-[90%] sm:gap-12 md:w-full sm:flex-row md:flex-row lg:w-full md:gap-2 lg:gap-8 mx-auto'>
        {benefitContent.map((item, index) => (
          <div className='my-8 flex flex-col items-center justify-start relative w-full md:w-1/3' key={index}>
            <div className="relative w-[100%] sm:w-[80%] md:w-[80%]  lg:max-w-[100%] aspect-square">
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className='w-full md:w-[70%] mx-auto'>
              <h2 className='mt-2 mb-1 whitespace-nowrap underline underline-offset-4' style={{ fontSize: "var(--font-size-semi-large)" }}>{item.heading}</h2>
              <p className='' style={{ fontSize: "var(--font-size-base)" }}>{item.body}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default BenefitsForTeacher