import React from 'react'
import AddTeacher from '../../../../features/admin/AddTeacher'
import { motion } from 'motion/react'

const SignIn: React.FC = () => {
    return (
        <div className='min-h-screen w-full overflow-x-hidden'>
            <h1 className='font-bold text-[var(--color-text-heading)] bg-[var(--color-surface)] w-fit text-center mx-auto py-2 px-8 rounded-xl mt-4 ' style={{ fontSize: "var(--font-size-semi-large)" }}>SignIn</h1>
            <motion.div
                initial={{
                    y: 10,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut"
                    }
                }} className='w-[80%] sm:w-[60%] md:[50%] lg:w-[40%] mx-auto bg-[var(--color-surface)] p-6 rounded-lg mt-8 shadow-lg'>
                <AddTeacher />
            </motion.div>
        </div>
    )
}

export default SignIn