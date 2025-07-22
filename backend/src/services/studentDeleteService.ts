import { StudentModel } from "../models/student.model.js";

export const deleteStudentByName = async (name: string) => {
  const deleted = await StudentModel.findOneAndDelete({ name });
  return deleted; 
};
