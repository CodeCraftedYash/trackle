import Header from '../components/header/Header'
import FirstSectionLayout from './FirstSectionLayout'

function MainLayout() {
  return (
    <div className='w-full min-h-screen bg-[--color-background]'>
        <Header />
        <main className='w-[90%] lg:w-[80%] m-auto mt-4 border-2 rounded-xl border-(--color-border)box-border p-2'>
            <FirstSectionLayout />
        </main>
    </div>
  )
}

export default MainLayout