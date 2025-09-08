import React, { useRef, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside';
import {motion} from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant';
import SearchBar from '../../components/SearchBar/SearchBar';

type Props = {
    onClose: () => void;
    onSubmit: (student_Id: string, month: number, year: number, score: number) => void;
}
const ScoreStudentModal:React.FC<Props> = ({onClose,onSubmit}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [ student_Id, setStudent_Id ] = useState('');
    const [ score, setScore ] = useState<number>(0);
    const [ studentExists, setStudentExists ] = useState(false);
    useClickOutside(elementRef,onClose);
    const today = {
       month: new Date().getMonth(),
       year: new Date().getFullYear(),
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
         if(e.target.value.length>1){
            e.target.value = e.target.value.charAt(e.target.value.length-1);
            setScore((Number(e.target.value)))
        }
        if(Number(e.target.value) > 3 || Number(e.target.value) < 0){
            e.target.value = "0";
            setScore(0);
        }
    }
    const handleSubmit = () => {
     onSubmit(student_Id,today.month,today.year,score);
     onClose();
    }
  return (
    <motion.div
      className=" fixed w-full inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
      variants={fadeIn}
      animate="animate"
      initial="initial"
      exit="exit"
    >
        <div ref={elementRef} className='bg-[var(--color-surface)] text-white w-[80%] sm:w-[75%] md:w-[70%] lg:w-[50%] h-fit py-8 border-2 rounded-xl flex flex-col items-center mb-[20%] relative'>
            <h1 className=' font-bold  my-2 text-center text-white border-b-2 lg:w-[40%] mx-auto'
            style={{fontSize:"var(--font-size-semi-large)"}}
            >{studentExists ? "Score the Student" : "Search For The Student"}</h1>

            {!studentExists &&
                <SearchBar setStudent_Id={setStudent_Id} setStudentExists={setStudentExists} />
            }
            {studentExists &&
                <div className='flex flex-col items-center gap-4 mt-5'>
                    <label className=' flex gap-1 flex-nowrap items-center font-bold' style={{fontSize:"var(--font-size-base)"}}> Enter Score 
                    <input type="number" min={0} value={score} max={3} placeholder='Enter Score between 0 and 3' className='bg-white outline-0 border-2 border-black text-black p-2 rounded-xl' style={{fontSize:"var(--font-size-base)"}}  onChange={handleChange}/>
                    </label>
                    <button onClick={handleSubmit} className='p-2 bg-green-500 rounded-xl'>Score</button>
                </div>
            }

        </div>
    </motion.div>
  )
}

export default ScoreStudentModal