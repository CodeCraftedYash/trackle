import { useNavigate } from '@tanstack/react-router';
import api from '../../../api/axios';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  try {
    const res = await api.post('/auth/teacher/login', { name, password });
    console.log("Login Success:", res.data);

    localStorage.setItem("token", res.data.token);

    navigate({to:'/'})
  } catch (err: any) {
    console.error("Login failed:", err);
    alert(err?.response?.data?.message || "Login error");
  }
};
  return (
    <div className=" min-h-screen p-10">
        <div className="w-[100%] lg:w-[40%] min-h-[15rem] border-2 mx-auto rounded-xl flex flex-col flex-nowrap">
            <h1 className="text-center text-2xl font-bold border-b-2 mt-2 pb-2">Login</h1>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col flex-nowrap items-center p-4 gap-4 text-[0.7rem] lg:text-[1rem]">
                <div className="flex flex-nowrap items-center justify-between w-full gap-4">
                    <label htmlFor="name" className="font-bold  text-nowrap w-[5rem] whitespace-nowrap lg:w-[7rem]">Name <span className="float-right">:</span></label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        pattern="[A-Za-z ]+"
                        className="bg-slate-200 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                        title="Only letters and spaces allowed"
                        required
                    />
                    </div>
                <div className="flex flex-nowrap items-center justify-between w-full gap-4">
                    <label htmlFor="password" className="font-bold  text-nowrap w-[5rem] lg:w-[7rem]">Password <span className="float-right">:</span></label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter your "
                        className="bg-slate-200 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                        required
                    />
                    </div>
                <div className="flex flex-nowrap items-center justify-between w-full gap-4">
                    <button type="submit" value="Send"  className="p-1.5 rounded-xl border-2 hover:cursor-pointer hover:scale-105 transition-all duration-150 mx-auto mt-4" style={{boxShadow:"0px 0px 6px 1px black"}}>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login