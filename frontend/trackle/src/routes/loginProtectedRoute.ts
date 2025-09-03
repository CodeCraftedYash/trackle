import { useAuthStore } from "../store/authStore";
import { redirect } from "@tanstack/react-router";

export const loginProtectedRoute = () => {
    const token = useAuthStore.getState().token;
    if (token) {
        throw redirect({ to: '/' });
    }
}
