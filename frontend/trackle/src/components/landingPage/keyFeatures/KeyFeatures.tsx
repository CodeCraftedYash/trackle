import React from 'react'
import { keyFeaturesContent } from './keyFeaturesContents'
const KeyFeatures:React.FC = () => {
  return (
     <div className=' w-full min-h-40 bg-[var(--color-background)] mt-12'>
                <h1 className='text-lg font-bold lg:text-2xl text-[var(--color-text)]'>Key Features</h1>
                <h2 className='text-sm lg:text-sm'>Trackle offers a comprehensive suite of tools to enhance your teaching experience.</h2>
                <div className='w-full flex  justify-between gap-2 mt-4'>
                        {
                            keyFeaturesContent.map((item,index)=>(
                                <div key={index} className=' border-2 border-[var(--color-border)] w-[8rem] lg:w-[20rem] min-h-[14rem] p-1.5'>
                                       <h1 className='text-[.9rem] lg:text-xl font-medium'>{item.title}</h1>
                                       <p className='text-[0.7rem] lg:text-base'>{item.body}</p> 
                                </div>
                            ))
                        }
                </div>
            </div>
  )
}

export default KeyFeatures