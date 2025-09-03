import { useAuthStore } from '../store/authStore';
import { redirect } from '@tanstack/react-router';

export const protectedRouteLoader = (requiredRole:'teacher'|'student') =>({params}: {params: {user:string}})=> {
  const {user,token} = useAuthStore.getState();
  if (!token || !user) {
    throw redirect({ to: '/login' });
  }
  if (requiredRole && user.role !== requiredRole) {
    throw redirect({ to: '/login' });
  }
  if (params.user && params.user !== user.name) {
    throw redirect({ to: '/login' });
  }
};

