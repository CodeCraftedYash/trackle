import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant'
import { useClickOutside } from '../../hooks/useClickOutside';
import { useAuthStore } from '../../store/authStore';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { tapAnimationVariant } from '../../variants/tapAnimationVariant';

type Props = {
    onClose: () => void;
    onSubmit: (_id: string, password: string) => void;
}

const DeleteAllStudentModal: React.FC<Props> = ({ onClose, onSubmit }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useClickOutside(elementRef, onClose);
    const _id = useAuthStore.getState().user?._id;
    const [viewPassword, setViewPassword] = useState(false);
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        if (!password) {
            throw new Error("Password is empty")
        }
        if (!_id) {
            throw new Error("User is not defined");
        }
        onSubmit(_id, password);
        setPassword("");
        onClose();
    }
    const baseClass = "w-full border p-2 rounded bg-white/90 text-black placeholder:text-black/80 "
    return (
        <motion.div
            className=" fixed w-full inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
            variants={fadeIn}
            animate="animate"
            initial="initial"
            exit="exit"
        >
            <div ref={elementRef} className='bg-[var(--color-surface)] text-white w-[80%] sm:w-[75%] md:w-[70%] lg:w-[50%] h-fit py-12 border-2 rounded-xl flex flex-col items-center mb-[10%]'>
                <h1 className=' font-bold  my-2 text-center text-white border-b-2 lg:w-[40%] mx-auto'
                    style={{ fontSize: "var(--font-size-semi-large)" }}
                >Delete All Student</h1>
                <div className='flex flex-col items-center px-4 w-[90%] lg:w-[60%]'>
                    <h3 style={{ fontSize: "var(--font-size-base)" }} className='mb-4'>This will delete all student Permanently</h3>
                    <div className='w-full flex flex-col '>
                        <h2 className='w-full font-bold mb-2'>Enter Your Password :</h2>
                        <div className=' flex flex-col flex-nowrap gap-4 relative w-full'>
                            <input
                                type={viewPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                className={`${baseClass} rounded-xl`}
                            />
                            <button
                                type="button"
                                onClick={() => setViewPassword(!viewPassword)}
                                className="absolute right-2 top-3 hover:cursor-pointer hover:scale-125 text-black "
                            >
                                {viewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse flex-nowrap justify-around w-[90%]'>
                        <motion.button
                            whileTap="tap"
                            initial="rest"
                            className="w-fit p-2 bg-red-500 rounded-xl mt-8 mb-2 "
                            onClick={handleSubmit}
                            variants={tapAnimationVariant}
                        >
                            Delete
                        </motion.button>
                        <motion.button
                            whileTap="tap"
                            initial="rest"
                            className="w-fit p-2 bg-green-500 rounded-xl mt-8 mb-2 "
                            onClick={()=>onClose()}
                            variants={tapAnimationVariant}
                        >
                            cancel
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default DeleteAllStudentModal