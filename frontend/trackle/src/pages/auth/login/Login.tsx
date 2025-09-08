import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useDialogStore } from '../../../store/dialogStore';
import { useAuthStore } from '../../../store/authStore';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { handleLogin } from '../../../handler/handleLogin';
import { motion } from 'motion/react';
import { getStudentPerformance } from '../../../api/studentServices';
import { usePerformanceStore } from '../../../store/performanceStore';
import type { studentPerformance } from '../../../types/studentPerformanceType';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const openDialog = useDialogStore(state => state.openDialog);
  const login = useAuthStore(state => state.login);
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const setPerformance = usePerformanceStore(state => state.setPerformance);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;

    try {
      const res = await handleLogin(name, password, role);
      const user = res.student ? res.student : res.teacher;
      if (!user || !user.role) {
        openDialog('Invalid user data', 'Login Failed');
        throw new Error('Invalid user data');
      }
      const token = res.token;

      login(user, token);

      let destination = '/';
      if (user.role === 'teacher') {
        destination = '/admin';
      } else if (user.role === 'student') {
        destination = `/user/${user._id}`;
        const performanceRes: studentPerformance = await getStudentPerformance(user._id);
        setPerformance(performanceRes);
      } else {
        openDialog('Unsupported user role', 'Login Failed');
        throw new Error('Unsupported user role');
      }
      navigate({ to: destination });
    } catch (err: any) {
      const msg = err?.response?.data?.message || err.message || 'Login failed';
      setErrorMessage(msg);
      openDialog(errorMessage, "Request Failed");
    }
  };
  return (
    <div className=" min-h-screen p-10">
      <motion.div
        initial={{
          y: 10,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
        className="w-[100%] lg:w-[40%] min-h-[15rem] mx-auto rounded-xl flex flex-col flex-nowrap">
        <h1 className="text-center font-bold mt-2 pb-3 rounded-xl bg-[var(--color-surface)] py-2 px-2 text-[var(--color-text-heading)] " style={{ fontSize: "var(--font-size-semi-large)" }}>Login</h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col flex-nowrap items-center p-4 gap-4 text-[0.7rem] lg:text-[1rem]">
            <div className="flex flex-nowrap items-center justify-between w-full gap-4">
              <label htmlFor="name" className="font-bold  text-nowrap w-[5rem] whitespace-nowrap lg:w-[7rem]">Name <span className="float-right">:</span></label>
              <input
                type="text"
                name="name"
                id='name'
                placeholder="Enter your name"
                autoComplete='name'
                pattern="[A-Za-z ]+"
                className="bg-slate-200 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                title="Only letters and spaces allowed"
                required
              />
            </div>
            <div className="flex flex-nowrap items-center justify-between w-full gap-4 relative">
              <label htmlFor="password" className="font-bold  text-nowrap w-[5rem] lg:w-[7rem] ">Password <span className="float-right">:</span></label>
              <input
                type={`${!viewPassword ? 'password' : 'text'}`}
                name="password"
                id='password'
                placeholder="Enter your password"
                className="bg-slate-200 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 w-full "
                required
              /> <button onClick={(e) => {
                e.preventDefault();
                setViewPassword(!viewPassword)
              }} className='absolute right-4 hover:cursor-pointer hover:scale-110 hover:font-bold transition-all duration-150'>
                {viewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            <div className='flex flex-nowrap items-center justify-between w-full gap-4 relative pr-20'>
              <label htmlFor="role" className="font-bold  text-nowrap w-[5rem] lg:w-[5.7rem] ">Role <span className="float-right">:</span></label>
              <label className='hover:cursor-pointer hover:scale-110'>
                <input type="radio" name="role" value="student" defaultChecked />
                Student
              </label>
              <label className='hover:cursor-pointer hover:scale-110' >
                <input type="radio" name="role" value="teacher" />
                Teacher
              </label>
            </div>
            <div className="flex flex-nowrap items-center justify-between w-full gap-4">
              <button className="p-1.5 rounded-xl border-2 hover:cursor-pointer hover:scale-105 transition-all duration-150 mx-auto mt-4" style={{ boxShadow: "0px 0px 6px 1px black" }}>Submit</button>
            </div>

          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Login