import React, { useState } from 'react';
import {motion} from 'motion/react';
import { stagger } from 'motion'
import { useStudentStore } from '../../store/studentStore';
import { useDialogStore } from '../../store/dialogStore';

type Props = {
    setStudent_Id: React.Dispatch<React.SetStateAction<string>>;
    setStudentExists: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchBar:React.FC<Props> = ({setStudent_Id,setStudentExists}) => {
    const [ query,setQuery ] = useState('');
    const checkStudent = useStudentStore().checkStudent;
    const openDialog = useDialogStore().openDialog;
    const allStudentsList = useStudentStore().students.map((item)=>item.name);
    const filteredStudentList = allStudentsList.filter((student) => {
        return student.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    })
    const handleSetStudentId = () => {
        const id = checkStudent(query);
        if(!id){
            openDialog("Student does not exists","Error");
        return;
        }
        setQuery('')
        setStudent_Id(id);
        setStudentExists(true);
    }
  return (
    <div className='flex flex-col items-center gap-4 mt-5'>
        <label className=' flex gap-1 flex-nowrap items-center font-bold' style={{fontSize:"var(--font-size-base)"}}> Search
            <input value={query} type="text" placeholder='Enter Student Name' className='bg-white outline-0 border-2 border-black text-black p-2 rounded-xl' style={{fontSize:"var(--font-size-base)"}} onChange={(e) => setQuery(e.target.value)}/>
        </label>
        <button className='border-2 bg-[var(--color-accent)] p-1 px-2 rounded-xl' onClick={handleSetStudentId}>Select</button>

        {query.length > 0 && <div className='absolute w-[50%] min-h-fit py-4 bg-[var(--color-accent)] border-2 rounded-xl top-[95%] transition-all duration-100 overflow-hidden'>
            <motion.ul
             initial={{ opacity:0 }}
             animate={{ opacity:1,transition:{when:"beforeChildren",delayChildren:stagger(0.08)}}}
            className=''>
                {filteredStudentList.map((item,index)=>(
                    <motion.li 
                        key={index}
                        className='text-white pb-1 border-b-2 px-4 hover:bg-green-400 cursor-pointer'
                        animate={{opacity:1,y:0,transition: { duration: 0.18}}}
                        initial={{opacity:0,y:8}}
                        onClick={()=>setQuery(item)}
                        >
                            {item}
                        </motion.li>
                ))}
            </motion.ul>
        </div>}
    </div>
  )
}

export default SearchBar