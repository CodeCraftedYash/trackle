import React, { useRef, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside';
import {motion} from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant';
import SearchBar from '../../components/SearchBar/SearchBar';

type Props = {
    onClose: () => void;
    onSubmit: (student_Id: string, HW: string) => void;
}
const AssignHWModal:React.FC<Props> = ({onClose,onSubmit}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [ student_Id, setStudent_Id ] = useState('');
    const [ HW, setHW ] = useState<string>("");
    const [ studentExists, setStudentExists ] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useClickOutside(elementRef,onClose);
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const target = e.target;
        target.style.height = "auto";
        target.style.height = `${target.scrollHeight}px`;
        target.value= e.target.value.substring(0,249);
        setHW(target.value)
    }
    const handleSubmit = () => {
     onSubmit(student_Id,HW);
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
            style={{fontSize:"var(--font-size-large)"}}
            >{studentExists ? "Assign HW" : "Search For The Student"}</h1>

            {!studentExists &&
                <SearchBar setStudent_Id={setStudent_Id} setStudentExists={setStudentExists} />
            }
            {studentExists &&
                <div className='flex flex-col items-center gap-4 mt-5'>
                    <label className=' flex gap-1 flex-nowrap flex-col items-center font-bold' style={{fontSize:"var(--font-size-base)"}}> Enter HW (within 250 characters)
                    <textarea placeholder='Enter Home work'
                    ref={textareaRef}
                     style={{ fontSize: "var(--font-size-base)",border:HW.length<249 ? "3px solid lightgreen":"3px solid red"}}
                     onChange={handleChange}
                     className='bg-white outline-0 text-black p-3 rounded-xl max-h-[20rem] lg:max-h-[10rem] min-w-[15rem] sm:min-w-[16rem] mg:min-w-[18rem] lg:min-w-[20rem] transition-all duration-300 ease-in-out overflow-hidden' 
                    ></textarea>
                    </label>
                    <button onClick={handleSubmit} className='p-2 bg-green-500 rounded-xl'>Assign</button>
                </div>
            }

        </div>
    </motion.div>
  )
}

export default AssignHWModal