// services/studentUpdateService.ts
import { StudentModel } from '../models/student.model.js';
import { type StudentType } from '../models/types/types.js';

export const updateStudent= async (updatedData: Partial<StudentType>) => {
  const { name } = updatedData;

  if (!name) {
    throw new Error("Student name is required to update.");
  }

  const existingStudent = await StudentModel.findOne({ name });

  if (!existingStudent) {
    throw new Error("Student not found.");
  }

  const updatedStudent = await StudentModel.findOneAndUpdate(
    { name },
    { $set: updatedData },
    { new: true }
  );

  return updatedStudent;
};
