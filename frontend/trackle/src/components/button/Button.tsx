import React from 'react'
import type { ButtonProps } from '../../types/buttonType'

const Button:React.FC<ButtonProps> = ({ cb,children,variant,customStyle }) => {
  const baseClass =  `${customStyle} bg-[var(--color-accent)] w-fit basis-1/3 lg:basis-1/5 lg:flex-none flex-auto hover:cursor-pointer hover:scale-105 lg:hover:shadow-lg hover:bg-green-500 shadow-white/20 rounded-lg border-2 border-[var(--color-border)] truncate p-2 transition-all duration-150 flex flex-nowrap items-center justify-between `
  const buttonClassName = {
    primary:`text-[.7rem] ${baseClass}`,
    secondary:`${baseClass}`,
  }  
  return (
   <button onClick={cb} className={buttonClassName[variant]}
    style={{fontSize:variant == 'primary' ? "var(--font-size-base)":"var(--font-size-small)"}}
  >
    {children}
  </button>
  )
}

export default Button