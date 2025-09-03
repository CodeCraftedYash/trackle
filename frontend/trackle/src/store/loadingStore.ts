import { create } from 'zustand';

type LoadingStoreType = {
    isLoading:boolean;
    setIsLoading:(vale:boolean)=>void;
}

export const useLoadingStore = create<LoadingStoreType>((set)=>{
 return {
    isLoading: false,
    setIsLoading: (value:boolean) => set({isLoading:value})
 }   
})