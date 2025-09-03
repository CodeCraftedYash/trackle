import { loginService } from "../api/loginService";
import { useDialogStore } from "../store/dialogStore";

const openDialog = useDialogStore.getState().openDialog;

export const handleLogin = async (name:string, password:string, role:string) => {
    try {
        const res = await loginService(name, password , role);
        openDialog("Login successful", "Success");
        return res;
    }
    catch (error) {
        openDialog("Login failed, please try again", "Error");
        throw error;
    }

}