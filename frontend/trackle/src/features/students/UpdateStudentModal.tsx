import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { fadeIn } from '../../variants/fadeInVariant';
import { handleCheckStudentExists } from '../../handler/studentHandler';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useDialogStore } from '../../store/dialogStore';
import { type UpdateDataType } from '../../types/updateStudentDataType';
import { useClickOutside } from '../../hooks/useClickOutside';

type Props = {
  onClose: () => void;
  onSubmit: (params: FormData) => void;
};

const UpdateStudentModal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [updateData, setUpdateData] = useState<UpdateDataType>({
    _id: "",
    password: "",
    gender: "",
    mobileNumber: "",
    standard: "",
    fees: "",
    picture: null,
    isFeesPaid: '',
  })
  const [studentExists, setStudentExists] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const openDialog = useDialogStore().openDialog;

  useClickOutside(elementRef, onClose);

  const handleCheck = async () => {
    const exists = await handleCheckStudentExists(name);
    if (!exists) {
      openDialog("Student Does not exist", "Error");
      return;
    }
    setUpdateData(prev => ({ ...prev, _id: exists }))
    setStudentExists(exists ? true : false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdateData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData: FormData = new FormData();
    formData.append('_id', updateData._id);
    formData.append('name', name);
    formData.append('password', updateData.password);
    formData.append('gender', updateData.gender);
    formData.append('mobileNumber', updateData.mobileNumber);
    formData.append('standard', updateData.standard);
    formData.append('fees', updateData.fees);
    formData.append('isFeesPaid', String(updateData.isFeesPaid ?? ''));
    if (updateData.picture) {
      formData.append('picture', updateData.picture);
    }
    onSubmit(formData);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
      variants={fadeIn}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <div
        ref={elementRef}
        className="bg-[var(--color-surface)] p-6 rounded-lg w-[90%] max-w-xl min-h-[50vh] max-h-[70vh] shadow-lg border-2 flex flex-col items-center overflow-y-auto"
      >
        <h1 className="font-bold text-[var(--color-text-heading)] border-b-2 mb-4" style={{ fontSize: "var(--font-size-semi-large)" }}>Update Student</h1>
        <p className="text-base mb-1">{studentExists ? 'Enter the fields to update the student data' : 'Check if student exists'}</p>
        <p className="text-base mb-4">Hit confirm to save or cancel to withdraw</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
          <label className="w-full max-w-sm">
            <span className="block mb-1 text-sm">Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={studentExists}
              required
              placeholder="Enter Name"
              className={`w-full p-2 rounded-lg border ${studentExists ? 'bg-white/70' : 'bg-white'} text-black outline-none`}
            />
          </label>

          {studentExists && (
            <>
              <label className="w-full max-w-sm relative">
                <span className="block mb-1 text-sm">Password</span>
                <input
                  type={viewPassword ? 'text' : 'password'}
                  name="password"
                  value={updateData.password}
                  placeholder="Enter new password"
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border bg-white text-black outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setViewPassword(!viewPassword)}
                  className="absolute right-2 top-9 text-black"
                >
                  {viewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </label>

              <fieldset className="w-full max-w-sm">
                <legend className="block mb-1 text-sm capitalize">Gender</legend>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      className="accent-blue-500"
                    />
                    Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      className="accent-pink-500"
                    />
                    Female
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="others"
                      onChange={handleChange}
                      className="accent-purple-500"
                    />
                    Others
                  </label>
                </div>
              </fieldset>

              <label key="mobileNumber" className="w-full max-w-sm">
                <span className="block mb-1 text-sm capitalize">Mobile Num</span>
                <input
                  type="number"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter mobile num"
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border bg-white text-black outline-none"
                />
              </label>
              <label key="standard" className="w-full max-w-sm">
                <span className="block mb-1 text-sm capitalize">Class</span>
                <input
                  type="text"
                  id="standard"
                  name="standard"
                  placeholder="Enter Class"
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border bg-white text-black outline-none"
                />
              </label>
              <label key="picture" className="w-full max-w-sm">
                <span className="block mb-1 text-sm capitalize">Picture</span>
                <input
                  type="file"
                  accept="image/*"
                  id="picture"
                  name="picture"
                  placeholder="select picture"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    if (file) {
                      setUpdateData(prev => ({ ...prev, picture: file }))
                    }
                  }}
                  className="w-full p-2 rounded-lg border bg-white text-black outline-none"
                />
              </label>
              <label key="fees" className="w-full max-w-sm">
                <span className="block mb-1 text-sm capitalize">Fees</span>
                <input
                  type="text"
                  id="fees"
                  name="fees"
                  placeholder="Enter Fees"
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border bg-white text-black outline-none"
                />
              </label>
              <fieldset className="w-full max-w-sm">
                <legend className="block mb-1 text-sm capitalize">Fees Paid</legend>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="isFeesPaid"
                      value="yes"
                      onChange={handleChange}
                      className="accent-green-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="isFeesPaid"
                      value="no"
                      onChange={handleChange}
                      className="accent-red-500"
                    />
                    No
                  </label>
                </div>
              </fieldset>
            </>
          )}

          <div className="flex gap-4 mt-4">
            {!studentExists ? (
              <button
                type="button"
                onClick={handleCheck}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Check
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Update
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UpdateStudentModal;
