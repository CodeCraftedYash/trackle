import { useAuthStore } from '../store/authStore';
import { redirect } from '@tanstack/react-router';

export const protectedRouteLoader = () => {
  const token = useAuthStore.getState().token;
  if (!token) {
    throw redirect({ to: '/login' });
  }
};
