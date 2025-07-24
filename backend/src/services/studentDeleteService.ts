import { StudentModel } from "../models/student.model.js";

export const deleteStudentById= async (id: string) => {
  const deleted = await StudentModel.findOneAndDelete({ id });
  return deleted; 
};
