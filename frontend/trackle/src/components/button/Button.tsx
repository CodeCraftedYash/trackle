import React from 'react'
import type { ButtonProps } from '../../types/buttonType'

const Button:React.FC<ButtonProps> = ({ cb,children,variant,customStyle }) => {
  const baseClass =  ` bg-[var(--color-accent)] w-fit basis-1/3 md:basis-1/4 lg:basis-1/5 lg:flex-none flex-auto hover:cursor-pointer hover:scale-105 lg:hover:shadow-lg hover:bg-green-500 shadow-white/20 rounded-xl p-2 lg:p-4 text-nowrap transition-all duration-150 flex flex-nowrap items-center justify-between ${customStyle} `
  const buttonClassName = {
    primary:`text-[.7rem] ${baseClass}`,
    secondary:`${baseClass}`,
  }  
  return (
   <button onClick={cb} className={buttonClassName[variant]}
    style={{fontSize:"var(--font-size-small)"}}
  >
    {children}
  </button>
  )
}

export default Button