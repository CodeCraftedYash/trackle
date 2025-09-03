import React from 'react'
import { motion } from 'motion/react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const About:React.FC = () => {
return (
    <section className="min-h-screen bg-[var(--color-background)] bg-gradient-to-b from-[var(--color-background)] to-[var(--color-background)] px-6 py-16 w-full">
      <div className="max-w-4xl mx-auto space-y-16 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-[var(--color-text)]">About Me</h1>
          <p className="text-lg text-[var(--color-text)] leading-relaxed">
            Hi, I’m <span className="font-semibold text-[var(--color-text)]">Yash Mishra</span>, 
            a Computer Science student passionate about building full-stack applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">The Issue</h2>
          <p className="text-[var(--color-text)] leading-relaxed">
            While giving <span className="font-medium">part-time tuition</span> to fund my education, 
            I faced several challenges: managing student details, tracking homework, scoring performance, 
            and handling fees efficiently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">Why Trackle?</h2>
          <p className="text-[var(--color-text)] leading-relaxed">
            To tackle these problems, I created <span className="font-semibold text-[var(--color-text)]">Trackle</span> — 
            a platform that makes managing students simpler and more engaging by blending 
            technology with study. The goal was to
            <span className="italic">track</span> and <span className="italic">tackle</span> student management in a smarter way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[var(--color-text)]">Let’s Connect</h2>
          <p className="text-[var(--color-text)] leading-relaxed">
            If you like Trackle, consider giving it a ⭐ on GitHub.  
            I’m also open to exciting opportunities where I can learn and contribute.
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/CodeCraftedYash/trackle" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-[var(--color-text)] hover:bg-white hover:text-black rounded-full hover:scale-125 transition" />
            </a>
            <a href="https://www.linkedin.com/in/yash-mishra1000/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-[var(--color-text)] hover:scale-125 hover:text-blue-600 transition" />
            </a>
            <a href="mailto:workyash2005@gmail.com">
              <BiLogoGmail className="w-6 h-6 text-[var(--color-text)] hover:scale-125 hover:text-red-500 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About