import { RouterProvider } from '@tanstack/react-router';
import './styles/global.css'
import { router } from './routes/routes';
import { AnimatePresence, motion } from 'motion/react';
import DialogBox from './components/dialogBox/DialogBox';
import Loading from './components/loading/Loading';
function App() {
  return (
          <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0,}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: .3, ease: 'easeInOut' }}
        >
          <RouterProvider router={router}/>
          <DialogBox />
          <Loading />
        </motion.div>
      </AnimatePresence>
  
)
}

export default App
