import { motion } from 'motion/react';

interface ConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ onConfirm, onCancel, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='w-[80%] lg:w-[30%] bg-white rounded-xl pb-4 box-border shadow-lg shadow-amber-50 flex flex-col items-center gap-4'>
      <h2 className="border-b-2 w-full text-center mt-4 pb-2 text-black"
        style={{ fontSize: 'var(--font-size-large)' }}>Are you sure?</h2>
      <p className="text-red-500"
        style={{ fontSize: 'var(--font-size-base)' }}>{message || 'This action cannot be undone.'}</p>
      <div className="flex gap-8 mt-6" style={{ fontSize: 'var(--font-size-base)' }}>
        <button onClick={onCancel} className="p-2 bg-green-500 hover:cursor-pointer rounded-xl hover:scale-110 hover:bg-green-800"
        >Cancel</button>
        <button onClick={onConfirm} className="p-2 bg-red-500 hover:cursor-pointer rounded-xl hover:scale-110 hover:bg-red-800">Confirm</button>
      </div>
    </motion.div>
  );
};
