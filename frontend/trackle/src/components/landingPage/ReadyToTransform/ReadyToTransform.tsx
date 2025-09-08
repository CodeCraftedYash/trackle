import React from 'react'
import Button from '../../button/Button'
import { useNavigate } from '@tanstack/react-router'

const ReadyToTransform: React.FC = () => {
  const navigate = useNavigate();
  const navigateCB = () => {
    navigate({ to: "/login" });
  }
  return (
    <div className='w-full p-8 [&>button]:bg-blue-500 [&>button]:ml-[50%] [&>button]:-translate-x-[50%] [&>button]:mt-8 border-t-2 pt-4 lg:pt-12 border-white/20'>

      <div className=' bg-[var(--color-surface)] py-4 rounded-xl mb-8 w-[80%] mx-auto'>
        <h1 className='text-lg font-bold text-[var(--color-text-heading)] mb-1 px-2 text-center' style={{ fontSize: "var(--font-size-semi-large)" }}>Ready to Transform Your Teaching?</h1>
      </div>
      <h2 className='text-sm lg:text-sm mt-1 md:w-[80%] mx-auto'>Join thousands of educators who are using Trackle to enhance thier teaching and empower their students</h2>

      <Button variant="primary" cb={navigateCB}>
        <h1 className='text-[var(--color-text-heading)]' style={{ fontSize: "var(--font-size-base)" }}>Get Started</h1>
      </Button>
    </div>
  )
}

export default ReadyToTransform