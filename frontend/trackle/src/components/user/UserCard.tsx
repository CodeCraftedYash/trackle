import React from 'react'
import type { StudentType } from '../../types/studentType'

const UserCard:React.FC<Partial<StudentType>> = (student) => {
  const { name, picture} = student;
  const tempPicture = "https://wallpapersok.com/images/high/doraemon-with-teary-eyes-kisgt57quvp67iro.webp"
  return (
    <div className='flex flex-col items-center lg:w-[40%] w-[30%] rounded-full object-cover overflow-hidden aspect-square' style={{boxShadow:".4px .4px 5px 1px var(--color-shadow)"}}>
        <img src={picture? picture : tempPicture} loading='lazy' alt={name} />
    </div>
  )
}

export default UserCard