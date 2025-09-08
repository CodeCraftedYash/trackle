import { create } from 'zustand';

interface DialogStateType {
  isOpen: boolean;
  message: string;
  title: string;
  openDialog: (msg: string, title?: string) => void;
  closeDialog: () => void;
}

export const useDialogStore = create<DialogStateType>((set) => ({
  isOpen: false,
  message: '',
  title: 'Notification!',
  openDialog: (msg, title = 'Notification!') =>
    set({ isOpen: true, message: msg, title }),
  closeDialog: () => set({ isOpen: false,message:'',title:'Notification!' }),
}));