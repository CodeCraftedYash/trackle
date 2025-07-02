import React from 'react'
import type { ButtonProps } from '../../types/buttonType'

const Button:React.FC<ButtonProps> = ({ cb,children,variant }) => {
  const baseClass = " bg-[var(--color-accent)]  hover:cursor-pointer hover:scale-105 lg:hover:shadow-lg shadow-white/20 rounded-lg border-2 border-[var(--color-border)] truncate transition-all duration-150 "
  const buttonClassName = {
    primary:'w-[8rem] lg:w-[9rem] text-[.8rem] px-2 py-1'+baseClass,
    secondary:''+baseClass,
  }  
  return (
   <button onClick={cb} className={buttonClassName[variant]}>{children}</button>
  )
}

export default Button