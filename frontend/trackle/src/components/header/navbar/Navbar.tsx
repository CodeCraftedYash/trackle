import React from 'react'
import { navItems } from './NavItems'

const Navbar: React.FC = () => {
  return (
    <nav className='text-(--color-text) '>
        <ul className='flex flex-nowrap items-center gap-4'>
            {
                navItems.map((item, index) => (
                    <li key={index} className='hover:scale-105 box-border border-2 px-2 rounded-xl hover:bg-(--color-secondary) transition-all duration-150' style={{ fontSize: 'var(--font-size-base) ' }}>
                        {item.title}
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}
export default Navbar;