interface ConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ onConfirm, onCancel, message }) => {
  return (
    <div className='bg-white rounded-xl p-12 aspect-[5/1] box-border flex flex-col items-center gap-4'>
      <h2 className="border-b-2 w-full text-center mt-4 pb-2 text-xl text-black">Are you sure?</h2>
      <p className="text-red-500">{message || 'This action cannot be undone.'}</p>
      <div className="flex gap-8 mt-6">
        <button onClick={onCancel} className="p-2 bg-green-500 hover:cursor-pointer rounded-xl hover:scale-110 hover:bg-green-800">Cancel</button>
        <button onClick={onConfirm} className="p-2 bg-red-500 hover:cursor-pointer rounded-xl hover:scale-110 hover:bg-red-800">Confirm</button>
      </div>
    </div>
  );
};
