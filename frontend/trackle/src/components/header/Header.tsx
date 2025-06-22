import React from 'react'
import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'

const Header: React.FC = () => {
  return (
    <header className='w-full h-fit py-2 bg-(--color-primary) flex flex-nowrap items-center justify-between font-semibold px-2 border-b-4 border-(--color-border) gradient-style-1'>
        <Logo />
        <Navbar />
    </header>
  )
}

export default Header