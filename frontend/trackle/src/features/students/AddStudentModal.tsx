import React, { useRef, useState,type ChangeEvent,type FormEvent } from 'react';
import type { AddStudentData, AddStudentModalProps } from '../../types/AddStudentDataType';
import { FaRegEye, FaRegEyeSlash, FaRegFolderOpen } from "react-icons/fa";
import { motion } from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant';
import { useClickOutside } from '../../hooks/useClickOutside';

const AddStudentModal: React.FC<AddStudentModalProps> = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState<AddStudentData>({
    name: '',
    gender: '',
    password: '',
    mobileNumber: '',
    picture: null,
    standard: '',
  });
  const [viewPassword, setViewPassword] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useClickOutside(elementRef,onClose);
  
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
  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("gender", form.gender);
  formData.append("password", form.password);
  formData.append("mobileNumber", form.mobileNumber);
  formData.append("standard", form.standard);

  if (form.picture) {
    formData.append("picture", form.picture);
  }

    e.preventDefault();
    onSubmit(formData);
    onClose();
  };
  const baseClass = "w-full border p-2 rounded bg-white/90 text-black placeholder:text-black/80 "
  return (
    <motion.div className="fixed w-full inset-0 bg-transparent flex items-center justify-center z-50 top-[50%] left-[50%] -translate-[50%]"
    style={{ fontSize: "var(--font-size-base)" }}
    variants={fadeIn}
    animate="animate" initial="initial" exit="exit"
    >
      <div className="bg-[var(--color-surface)] p-6 rounded-lg w-[90%] lg:w-full max-w-md shadow-lg" ref={elementRef}>
        <h2 className=" font-bold mb-4" style={{fontSize:"var(--font-size-large)"}}>Add Student</h2>
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
          <input
            type="text"
            name="standard"
            value={form.standard}
            onChange={handleChange}
            placeholder="Class"
            required
            className={`${baseClass}`}
          />

          <div className="flex justify-between gap-2 mt-4 ">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-500 rounded-xl hover:scale-110 transition-all duration-200 border-2 border-white font-bold whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 rounded-xl hover:scale-110 transition-all duration-200 border-2 border-white font-bold whitespace-nowrap"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddStudentModal;
