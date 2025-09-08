import React, { useState } from 'react'
import { motion } from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant';
import { useDialogStore } from '../../store/dialogStore';
import { useClickOutside } from '../../hooks/useClickOutside';
import SearchBar from '../../components/SearchBar/SearchBar';

type Props = {
  onClose: () => void;
  onSubmit: (id: string) => Promise<void>;
}
const DeleteStudentModal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [ studentExists, setStudentExists ] = useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [deleteStudentId, setDeleteStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const openDialog = useDialogStore(state => state.openDialog)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deleteStudentId) {
      openDialog("No Student Selected", "Error");
      return;
    }
    onSubmit(deleteStudentId);
    onClose();
  }

  useClickOutside(elementRef, onClose);

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
        className="bg-[var(--color-surface)] absolute top-[20%] p-6 rounded-lg w-[90%] max-w-xl min-h-[40vh] shadow-lg border-2 flex flex-col items-center"
      >
        <h1 className="font-bold text-[var(--color-text-heading)] border-b-2 mb-4" style={{ fontSize: "var(--font-size-semi-large)" }}>Delete Student</h1>
        <div className="text-base mb-1">
          {studentExists ? (
            <>
              <h1 style={{ fontSize: "var(--font-size-base)" }}>Delete <span className='text-red-500 scale-110 font-black'>{studentName}</span> ?</h1>
            </>
          ) : <h1>Is the Student Exists ?</h1>
          }</div>
        <p className="text-base mb-4">Hit confirm to delete</p>
        {!studentExists&&<SearchBar setStudentName={setStudentName} setStudent_Id={setDeleteStudentId} setStudentExists={setStudentExists} />}
        {studentExists &&<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">

          <div className="flex gap-4 mt-4">
            {studentExists && (
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
        </form>}

      </div>
      
    </motion.div>
  )
};

export default DeleteStudentModal