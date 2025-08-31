import React, { useEffect } from 'react';
import { stagger, useAnimate } from 'motion/react';
import { useLoadingStore } from '../../store/loadingStore';

const Loading: React.FC = () => {

  const isLoading = useLoadingStore().isLoading;
  const [ scope , animate ] = useAnimate()
  useEffect(()=>{
    animate("div",
      {scale:[0,1]},
      {duration: 1,repeat:Infinity,repeatType:"reverse",repeatDelay:2, delay: stagger(1)}
    )
  },[])

  return (
    <div
    style={{display:isLoading?'block':'none'}}
    ref={scope}

      className='w-[4rem] h-[4rem] absolute top-[50%] rounded-full left-[50%] -translate-[50%]'
    >
      
      <div 
      className='w-[93%] h-[93%] bg-[#CCFF00] z-[96] absolute top-[50%] rounded-full left-[50%] -translate-[50%] border-2 border-white'></div>

      <div 
      className='w-[62%] h-[62%] bg-[#FF38D1] z-[97] absolute top-[50%] rounded-full left-[50%] -translate-[50%] border-2 border-white'></div>

      <div
      className='w-[31%] h-[31%] bg-[#00FFFF] z-[98] absolute top-[50%] rounded-full left-[50%] -translate-[50%] border-2 border-white'></div>
    </div>
  )
}

export default Loading