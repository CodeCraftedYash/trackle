import { useNavigate } from '@tanstack/react-router';
import React from 'react'

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ to: '/' });
  }
  return (
    <div className='box-border' onClick={handleClick}>
      <h2 className='text-[var(--color-text-heading)] font-black italic hover:cursor-pointer'
        style={{
          fontSize: 'var(--font-size-large)'
        }}>Trackle</h2>
    </div>
  )
}
export default Logo;