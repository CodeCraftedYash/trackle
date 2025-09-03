import React, { useEffect, useState } from 'react';
import { Table, Button, AddStudentModal, UpdateStudentModal, DeleteStudentModal, DeleteAllStudentModal, ScoreStudentModal, AssignHWModal, handleAddStudent, handleEditStudent, handleDeleteStudent, handleDeleteAllSubmit, handleScoreStudentSubmit, handleAssignHWSubmit, useStudentStore, useStudentPerformanceStore, getAllStudentPerformance, getStudents, IoMdPersonAdd, RxUpdate, TiUserDelete, RiDeleteBin6Fill, GrScorecard, FaPen } from './index';
import { motion } from 'motion/react';

const AdminLayout: React.FC = () => {
  const [showModal, setShowModal] = useState(0);
  const setStudents = useStudentStore(state => state.setStudents)
  const setAllStudentsPerformnace = useStudentPerformanceStore().setAllStudentsPerformance;
  useEffect(() => {
    const fetchData = async () => {
      const students = await getStudents();
      setStudents(students);
      const studentsPerformance = await getAllStudentPerformance();
      setAllStudentsPerformnace(studentsPerformance);
    }
    fetchData();
  }, [])

  return (
    <div className='bg-[var(--color-background)] w-full min-h-screen text-[var(--color-text)] p-2' style={{
      overflow: showModal == 0 ? 'auto' : 'hidden'
    }} >
      {showModal != 0 && <div className='fixed top-0 w-full h-full z-10' style={{ backgroundColor: "rgba(0, 0, 0, 0.01)", backdropFilter: "blur(6px)" }}></div>}
      <motion.div
        initial={{
          y: 15,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut"
          }
        }}
        className='w-[90%] md:w-w-[75%] lg:w-[60%] mx-auto bg-[var(--color-accent)] flex justify-center border-b-2 border-[var(--color-border)] pb-2 mt-2 rounded-xl'>
        <h1 className='font-bold text-center w-full mt-2' style={{fontSize:"var(--font-size-semi-large)"}}>Admin</h1>
      </motion.div>

      <motion.div className='w-[90%] lg:w-[60%] min-h-[4rem] border-2 border-[var(--color-border)] mx-auto flex flex-wrap items-center justify-center gap-4 p-4 box-border mt-[2rem] rounded-xl'
        initial={{
          y: 15,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            delay:0.2
          }
        }}
      >
        <Button cb={() => setShowModal(1)} variant='primary'>Add Student<IoMdPersonAdd className='text-lg' /></Button>
        <Button cb={() => setShowModal(2)} variant='primary'>Edit Details<RxUpdate className='text-lg' /></Button>
        <Button cb={() => setShowModal(3)} variant='primary'>Remove Student<TiUserDelete className='text-lg' /></Button>
        <Button cb={() => setShowModal(4)} variant='primary'>Remove All <RiDeleteBin6Fill className='text-lg' /></Button>
        <Button cb={() => setShowModal(5)} variant='primary'>Score Student<GrScorecard className='text-lg' /></Button>
        <Button cb={() => setShowModal(6)} variant='primary'>Assign HW<FaPen className='text-lg' /></Button>
      </motion.div>

      <motion.div
        initial={{
          y: 15,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            delay:0.4
          }
        }}
        className='w-[90%] lg:w-[60%] mx-auto mt-[2rem]'>
        <Table />
      </motion.div>

      {showModal == 1 && <AddStudentModal onClose={() => setShowModal(0)} onSubmit={handleAddStudent} />}
      {showModal == 2 && <UpdateStudentModal onClose={() => setShowModal(0)} onSubmit={handleEditStudent} />}
      {showModal == 3 && <DeleteStudentModal onClose={() => setShowModal(0)} onSubmit={handleDeleteStudent} />}
      {showModal == 4 && <DeleteAllStudentModal onClose={() => setShowModal(0)} onSubmit={handleDeleteAllSubmit} />}
      {showModal == 5 && <ScoreStudentModal onClose={() => setShowModal(0)} onSubmit={handleScoreStudentSubmit} />}
      {showModal == 6 && <AssignHWModal onClose={() => setShowModal(0)} onSubmit={handleAssignHWSubmit} />}
    </div>
  )
}

export default AdminLayout;
