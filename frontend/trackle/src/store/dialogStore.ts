import { create } from 'zustand';

type DialogStoreType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export const useDialogStore = create<DialogStoreType>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen : boolean) => set({ isOpen})
}))