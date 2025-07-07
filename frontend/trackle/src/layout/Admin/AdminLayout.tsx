import React from 'react'
import Table from '../../components/table/Table'
import Button from '../../components/button/Button'

const AdminLayout:React.FC = () => {
  const tempCB = ()=>console.log("hi");
  return (
    <div className='bg-[var(--color-background)] w-full min-h-screen text-[var(--color-text)] p-2'>
      <div className=' w-full bg -[var(--color-surface)] flex justify-center border-b-2 border-[var(--color-border)] pb-2'>
      <h1 className='font-bold text-xl'>Admin</h1>
      </div>
      <div className='w-[90%] lg:w-[60%] border-2  border-[var(--color-border)] mx-auto flex items-center justify-center gap-4 p-4 box-border mt-[2rem]'>
        <Button cb={tempCB} variant='primary'>Add Student</Button>
        <Button cb={tempCB} variant='primary'>Remove Student</Button>
        <Button cb={tempCB} variant='primary'>Edit Details</Button>
      </div>
      <div className='w-[90%] lg:w-[60%] border-2 border-[var(--color-border)] mx-auto mt-[2rem]'>
        <Table />
      </div>
    </div>
  )
}

export default AdminLayout