import React from 'react'
import { motion } from 'motion/react'
import { FaGithub, FaLinkedin, BiLogoGmail, read, sad, angry, wow } from './index'

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-[var(--color-background)] bg-gradient-to-b from-[var(--color-background)] to-[var(--color-background)] px-6 py-6 w-full">
      <div className="max mx-auto relative">
        <h1 className="font-bold text-[var(--color-text-heading)] w-fit mx-auto px-4 py-2 mb-8 bg-[var(--color-surface)] rounded-xl" style={{ fontSize: "var(--font-size-large)" }}>About Me</h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" space-y-4 mb-12 sm:w-[80%] sm:mx-auto md:w-[90%] lg:w-[50%] "
        >
          <div className='flex justify-between'>
            <p style={{ fontSize: "var(--font-size-base)" }} className="text-wrap text-[var(--color-text)] leading-relaxed text-left lg:w-[50%] lg:pt-12">
              Hi, I’m <span className="font-semibold text-[var(--color-text)]">Yash Mishra</span>,
              a Computer Science student passionate about building full-stack applications.
            </p>
            <img src={read} alt="read" className='w-[35%] sm:w-[20%] object-contain lg:w-[30%] ' />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" space-y-4 mb-12 sm:w-[80%] sm:mx-auto md:w-[90%] lg:w-[50%] "
        >
          <h1 className="font-bold text-[var(--color-text)] text-left ml-2" style={{ fontSize: "var(--font-size-semi-large)" }}>The Issue</h1>
          <div className='flex flex-row-reverse justify-between'>
            <p style={{ fontSize: "var(--font-size-base)" }} className="text-wrap text-[var(--color-text)] leading-relaxed text-left lg:w-[50%]">
              While giving <span className="font-medium">part-time tuition</span> to fund my education,
              I faced several challenges: managing student details, tracking homework, scoring performance,
              and handling fees efficiently.
            </p>
            <img src={sad} alt="sad" className='w-[35%] sm:w-[20%] object-contain lg:w-[30%] ' />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" space-y-4 mb-12 sm:w-[80%] sm:mx-auto md:w-[90%] lg:w-[50%] "
        >
          <h2 className="font-bold text-[var(--color-text)] text-right mr-2 " style={{ fontSize: "var(--font-size-semi-large)" }}>Why Trackle?</h2>
          <div className='flex justify-between'>
            <p style={{ fontSize: "var(--font-size-base)" }} className="text-wrap text-[var(--color-text)] leading-relaxed text-left lg:w-[50%]">
              To tackle these problems, I created <span className="font-semibold text-[var(--color-text)]">Trackle</span> —
              a platform that makes managing students simpler and more engaging by blending
              technology with study. The goal was to
              <span className="italic">track</span> and <span className="italic">tackle</span> student management in a smarter way.
            </p>
            <img src={angry} alt="angry" className='w-[35%] sm:w-[20%] object-contain lg:w-[30%] ' />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className=" space-y-4 mb-4 sm:w-[80%] sm:mx-auto md:w-[90%] lg:w-[50%]"
        >
          <h1 className="font-bold text-[var(--color-text)] text-left ml-2" style={{ fontSize: "var(--font-size-semi-large)" }}>Let’s Connect</h1>
          <div className='flex flex-row-reverse justify-between w-full mb-8'>
            <p style={{ fontSize: "var(--font-size-base)" }} className="text-wrap text-[var(--color-text)] leading-relaxed text-left lg:w-[50%]">
              If you like Trackle, consider giving it a ⭐ on GitHub.
              I’m also open to exciting opportunities where I can learn and contribute.
            </p>
            <img src={wow} alt="wow" className='w-[35%] sm:w-[20%] lg:w-[30%] object-contain' />
          </div>
          <div className="flex justify-center gap-6 lg:gap-12 items-center mt-6 lg:mt-12">
            <a href="https://github.com/CodeCraftedYash/trackle" target="_blank" rel="noopener noreferrer">
              <FaGithub className="aspect-square text-slate-800 hover:bg-white  rounded-full hover:scale-125 transition hover:text-[var(--color-accent)] text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/yash-mishra1000/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="aspect-square text-blue-700 hover:scale-125  transition hover:text-[var(--color-accent)] text-4xl" />
            </a>
            <a href="mailto:workyash2005@gmail.com">
              <BiLogoGmail className="aspect-square text-red-800 hover:scale-125  transition hover:text-[var(--color-accent)] text-4xl" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About