import axiosInstance from "./axios";


export const loginService = async (name: string, password: string, role: string) => {

    const loginURL = `/auth/${role}/login`;
    try {
        const res = await axiosInstance.post(loginURL, { name, password, role });
        return res.data;
    }
    catch (error) {
        throw error;
    }
}