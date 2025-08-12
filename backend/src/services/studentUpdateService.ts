import { StudentModel } from '../models/student.model.js';
import { type StudentType } from '../models/types/types.js';
import { Types } from 'mongoose';
import { hashPassword } from '../utils/bcrypt.js';
import { objectCleaner } from '../utils/objectCleaner.js';

export const updateStudent= async (updatedData: Partial<StudentType>) => {
  const { _id, password, ...rest } = updatedData;
  
  let updateData:Partial<StudentType> ={...rest};
  if (!_id) {
    throw new Error("Student ID is required to update.");
  }

  updateData = objectCleaner<StudentType>(rest);

  if (password) {
    const hashedPassword = await hashPassword(password);
    updateData.password = hashedPassword;
  }

  const existingStudent = await StudentModel.findOne({ _id: new Types.ObjectId(_id) });

  if (!existingStudent) {
    throw new Error("Student not found.");
  }

  const updatedStudent = await StudentModel.findOneAndUpdate(
    { _id },
    { $set: updateData },
    { new: true }
  );

  return updatedStudent;
};
