import { StudentModel } from "../models/student.model.js";

export const getAllStudents = async () => {
    return await StudentModel.find()
}