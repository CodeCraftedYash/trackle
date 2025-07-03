import React from 'react'
import Button from '../../button/Button'

const ReadyToTransform:React.FC = () => {
    const temporaryCB = () => {
        alert('this will take you to login page')
    }
  return (
    <div className='w-full  p-8 [&>button]:bg-blue-500 [&>button]:ml-[50%] [&>button]:-translate-x-[50%] [&>button]:mt-8'>
        <div>
            <h1 className='text-lg font-bold lg:text-2xl text-[var(--color-text)]'>Ready to Transform Your Teaching?</h1>
            <h2 className='text-sm lg:text-sm mt-1'>Join thousands of educators who are using Trackle to enhance thier teaching and empower their students</h2>
        </div>
        <Button variant="primary" cb={ temporaryCB }>
            <h1 className='text-sm lg:text-xl'>Get Started</h1>
        </Button>
    </div>
  )
}

export default ReadyToTransform