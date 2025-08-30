import { useLoadingStore } from "../store/loadingStore";
import axiosInstance from "./axios";


export const loginService = async (name: string, password: string, role: string) => {
    const {setIsLoading} = useLoadingStore.getState();
    const loginURL = `/auth/${role}/login`;
    try {
        setIsLoading(true);
        const res = await axiosInstance.post(loginURL, { name, password, role });
        setIsLoading(false);
        return res.data;
    }
    catch (error) {
        setIsLoading(false);
        throw error;
    }
}