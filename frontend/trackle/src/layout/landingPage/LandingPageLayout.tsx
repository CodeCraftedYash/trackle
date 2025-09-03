import React from 'react'
import Hero from '../../components/landingPage/Hero'
import KeyFeatures from '../../components/landingPage/keyFeatures/KeyFeatures'
import BenefitsForTeacher from '../../components/landingPage/benefitsForTeachers/BenefitsForTeacher'
import ReadyToTransform from '../../components/landingPage/ReadyToTransform/ReadyToTransform'
import { useAuthStore } from '../../store/authStore'
const LandingPageLayout:React.FC = () => {
  const token = useAuthStore(state => state.token);
  return (
    <div className='w-full min-h-[90dvh] bg-[var(--color-background)] text-[var(--color-text)] box-border py-4'>
        <main className='w-[90%] lg:w-[65%]  min-h-20 mx-auto lg:mt-8 flex flex-col gap-10 lg:gap-32'>
           <Hero />
           <KeyFeatures />
           <BenefitsForTeacher />
           {!token&&<ReadyToTransform />}
        </main>
    </div>
  )
}

export default LandingPageLayout