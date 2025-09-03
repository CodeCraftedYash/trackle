import React, {useState } from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant';
import { handleCheckStudentExists } from '../../handler/studentHandler';
import { useDialogStore } from '../../store/dialogStore';
import { useClickOutside } from '../../hooks/useClickOutside';
type Props = {
    onClose: () => void;
    onSubmit: (id: string) => Promise<void>;
}
const DeleteStudentModal:React.FC<Props> = ({onClose,onSubmit}) => {

    const elementRef = React.useRef<HTMLDivElement>(null);
    const [name, setName] = useState('');
    const [deleteStudent, setDeleteStudent ] = useState('');

    const openDialog = useDialogStore(state => state.openDialog)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(deleteStudent);
        onClose();
    }

     const handleCheck = async () => {
      const exists = await handleCheckStudentExists(name);
      if(exists === null) {
        openDialog("Student Does not exist", "Error");
        return;
        }
      setDeleteStudent(exists);
    };

    useClickOutside(elementRef,onClose);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
      variants={fadeIn}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <div
        ref={elementRef}
        className="bg-[var(--color-surface)] p-6 rounded-lg w-[90%] max-w-xl min-h-[40vh] shadow-lg border-2 flex flex-col items-center overflow-y-auto"
      >
        <h1 className="font-bold text-[var(--color-text)] border-b-2 mb-4 text-xl">Delete Student</h1>
        <div className="text-base mb-1">
          {!!deleteStudent ? (
            <>
              <h1 style={{fontSize:"var(--font-size-base)"}}>Delete <span className='text-red-500 scale-110 font-black'>{name}</span> ?</h1>
            </>
          ):"check if student exists"
        }</div>
        <p className="text-base mb-4">Hit confirm to delete</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
          <label className="w-full max-w-sm">
            <span className="block mb-1 text-sm">Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!!deleteStudent}
              required
              placeholder="Enter Name"
              className={`w-full p-2 rounded-lg border ${deleteStudent ? 'bg-white/70' : 'bg-white'} text-black outline-none`}
            />
          </label>
          <div className="flex gap-4 mt-4">
            {!deleteStudent ? (
              <button
                type="button"
                onClick={handleCheck}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Check
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Delete
                </button>
              </>
            )}
            </div>
        </form>
        
        </div>
        </motion.div>
    )
};

export default DeleteStudentModal