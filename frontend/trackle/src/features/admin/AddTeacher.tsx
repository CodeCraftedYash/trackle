import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { FaRegEye, FaRegEyeSlash, FaRegFolderOpen } from 'react-icons/fa';
import { motion } from 'motion/react';
import { tapAnimationVariant } from '../../variants/tapAnimationVariant';
import { useNavigate } from '@tanstack/react-router';
import { useDialogStore } from '../../store/dialogStore';
const AddTeacher: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        gender: '',
        password: '',
        mobileNumber: '',
        picture: null,
        standard: '',
    });
    const [viewPassword, setViewPassword] = useState(false);
    const navigate = useNavigate();
    const openDialog = useDialogStore(state => state.openDialog);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target;
        if (target instanceof HTMLInputElement) {
            if (target.type === 'file') {
                setForm((prev) => ({ ...prev, [target.name]: target.files ? target.files[0] : null }));
            } else {
                setForm((prev) => ({ ...prev, [target.name]: target.value }));
            }
        } else if (target instanceof HTMLSelectElement) {
            setForm((prev) => ({ ...prev, [target.name]: target.value }));
        }
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        openDialog("Registration is currently disabled", "Thank You for your interest!");
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("gender", form.gender);
        formData.append("password", form.password);
        formData.append("mobileNumber", form.mobileNumber);
        formData.append("standard", form.standard);

        if (form.picture) {
            formData.append("picture", form.picture);
        }

    };
    const baseClass = "w-full border p-2 rounded bg-white/90 text-black placeholder:text-black/80 "
    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className={`${baseClass}`}
            />

            <div className="flex gap-12">
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={form.gender === 'male'}
                        onChange={handleChange}
                        required
                        className='hover:cursor-pointer mx-0.5'
                    /> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={form.gender === 'female'}
                        onChange={handleChange}
                        required
                        className='hover:cursor-pointer'
                    /> Female
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="others"
                        checked={form.gender === 'others'}
                        onChange={handleChange}
                        required
                    /> Other
                </label>
            </div>
            <div className='flex-col flex-nowrap gap-4 relative '>
                <input
                    type={viewPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className={`${baseClass}`}
                />
                <button
                    type="button"
                    onClick={() => setViewPassword(!viewPassword)}
                    className="absolute right-2 top-3 hover:cursor-pointer hover:scale-125 text-black "
                >
                    {viewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
            </div>
            <input
                type="text"
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className={`${baseClass}`}
            />
            <label className='flex flex-nowrap items-center  bg-white/90 relative'>
                <input
                    type="file"
                    name="picture"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full hover:cursor-pointer text-black/90 p-2"
                />
                <h1 className='text-xl text-yellow-500 absolute right-4'><FaRegFolderOpen /></h1>
            </label>
            <div className="flex justify-between gap-2 mt-4 ">
                <motion.button
                    whileTap="tap"
                    initial="rest"
                    className="w-fit p-2 bg-green-500 rounded-xl mt-8 mb-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out text-[var(--color-text-heading)]  "
                    type='submit'
                    variants={tapAnimationVariant}
                    onClick={handleSubmit}
                >
                    Register
                </motion.button>
                <motion.button
                    whileTap="tap"
                    initial="rest"
                    className="w-fit p-2 bg-[var(--color-accent)] rounded-xl mt-8 mb-2  hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out text-[var(--color-text-heading)] "
                    onClick={(e:FormEvent)=>{
                        e.preventDefault();
                        navigate({to:"/login"});
                    }}
                    variants={tapAnimationVariant}
                >
                    Login ?
                </motion.button>
            </div>
        </form>
    )
}

export default AddTeacher