import React from 'react'
import Hero from '../../components/landingPage/Hero'
import KeyFeatures from '../../components/landingPage/keyFeatures/KeyFeatures'
import BenefitsForTeacher from '../../components/landingPage/benefitsForTeachers/BenefitsForTeacher'
import ReadyToTransform from '../../components/landingPage/ReadyToTransform/ReadyToTransform'
const LandingPageLayout:React.FC = () => {
  return (
    <div className='w-full min-h-[90dvh] bg-[var(--color-background)] text-[var(--color-text)] box-border py-4'>
        <main className='w-[90%] lg:w-[65%]  min-h-20 mx-auto lg:mt-8'>
           <Hero />
           <KeyFeatures />
           <BenefitsForTeacher />
           <ReadyToTransform />
        </main>
    </div>
  )
}

export default LandingPageLayout