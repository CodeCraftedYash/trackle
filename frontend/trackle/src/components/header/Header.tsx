import React, { useState } from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import { AnimatePresence, motion } from 'motion/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='w-full h-fit py-2 bg-[var(--color-surface)] flex flex-nowrap items-center font-semibold px-2 border-b-4 border-[var(--color-border)] justify-between'
      style={{
        fontSize: 'var(--font-size-base)',
      }}
    >
      <Logo />
      <div className='hidden lg:block'><Navbar /></div>
      <div className='lg:hidden relative flex items-center justify-center mr-4 -translate-y-2'>
        {<AnimatePresence>
          {!open && <motion.div
            key={`${open}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><GiHamburgerMenu style={{ fontSize: "var(--font-size-large)" }} className='font-bold absolute text-[var(--color-text)] ' onClick={() => setOpen(true)} /></motion.div>}

          {open && <motion.div
            key={`${open}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><IoClose style={{ fontSize: "calc(var(--font-size-large) + 4px)" }} className='font-bold absolute text-[var(--color-text)] pr-0.5 pb-0.5' onClick={() => setOpen(false)} /></motion.div>}

        </AnimatePresence>}
      </div>
      <AnimatePresence>
      {open && <div className='absolute lg:hidden right-0 top-14 pl-2 z-[100] overflow-x-hidden'><motion.div
      initial={{x:"100%",opacity:0}}
      animate={{x:"0%",opacity:1}}
      exit={{opacity:0 ,x:"100%"}}
      transition={{
        duration:0.2,
        ease:"easeInOut",

      }}
      className='bg-black/50  p-2 border-r-0 rounded-l-xl border-2 border-[var(--color-text)] '
      >
            <Navbar setOpen={setOpen}/>
      </motion.div>
      </div>}
      </AnimatePresence>
    </header>
  )
}

export default Header