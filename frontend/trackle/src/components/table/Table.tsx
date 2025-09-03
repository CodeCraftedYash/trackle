import React from 'react'
import { getTableRows,tableHeading } from './tableData'

const Table:React.FC = () => {

  const tableHeadings = tableHeading.map((item) =>(
    <th className=' text-left hover:bg-[var(--color-surface)] p-2 border-b-2 text-[var(--color-text)] border-[var(--color-surface)] ' style={{fontSize:"font-size-base"}} key={item}>{item}</th>
  ))
  const today = new Date().getDate() - 1;
  const gettableRowsData = getTableRows();
  const tableRows = gettableRowsData.map((item) => (
    <tr key={item._id} className='w-full hover:bg-[var(--color-accent)] transition-all duration-300 ease-in-out'>
      <td className='p-2 border-b-2 text-left  border-[var(--color-surface)]'><img className='w-10 rounded-full aspect-square object-cover object-top ' src={item.picture?item.picture:"notfound"} alt={item.name} /></td>
      <td className='p-2 border-b-2 text-left  font-bold text-[var(--color-text)] border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.name}</td>
      <td className='p-2 border-b-2 text-left  font-bold text-[var(--color-text)] border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.gender}</td>
      <td className='p-2 border-b-2 text-left  font-bold text-[var(--color-text)] border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.standard}</td>
      <td className='p-2 border-b-2 text-left  font-bold text-[var(--color-text)] border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.mobileNumber}</td>
      <td className='p-2 border-b-2 text-left  font-bold text-[var(--color-text)] border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.fees}</td>
      <td className='p-2 border-b-2 text-left  font-bold text-[var(--color-text)] border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.isFeesPaid?"yes":"no"}</td>
      <td className='p-2 text-left font-bold text-[var(--color-text)] truncate border-b-2 border-[var(--color-surface)]' style={{fontSize:"var(--font-size-base)"}}>{item.homeWork?.[today] ?? "No homework"}</td>
    </tr>
  ))
  return (
    <div className='w-full rounded-xl'>
      <h1 className='font-bold w-full text-center mx-auto bg-[var(--color-accent)] text-[var(--color-text)] px-10 py-2 rounded-xl mb-8 border-[var(--color-surface)] border-2'
      style={{fontSize:"var(--font-size-semi-large)"}}
      >Student Data</h1>
      <div className='w-full overflow-x-scroll border-2 rounded-xl border-[var(--color-surface)]' style={{scrollbarWidth:'none',scrollBehavior:'smooth'}}>
      <table className=' w-full '>
        <thead>
          <tr className=' rounded-xl border-[var(--color-surface)]'>
            {tableHeadings}
          </tr>
        </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
    </div>
  </div>
)
}

export default Table