import { StudentModel } from "../models/student.model.js";
import { v2 as cloudinary} from "cloudinary";

export const deleteStudentById= async (_id: string) => {
  const student = await StudentModel.findById(_id);
  if (!student) {
    throw new Error(`Student with ID ${_id} not found`);
  }
  if (student.picture_Id) {
    try {
      await cloudinary.uploader.destroy(student.picture_Id);
    }
    catch (error : any ) {
      throw new Error(`Failed to delete picture from cloudinary: ${error.message}`);
    }
  }

  const deleted = await StudentModel.findByIdAndDelete(_id);
  
  if (!deleted) {
    throw new Error(`Failed to delete student with ID ${_id}`);
  }
  return deleted; 
};
