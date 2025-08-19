import { StudentModel } from "../models/student.model.js";
import { TeacherModel } from "../models/teacher.model.js"
import bcrypt from 'bcrypt'
import cloudinary from "../utils/cloudinary.js";

export const deleteAllStudentService = async (_Id:string,password:string) => {
    const teacher = await TeacherModel.findById(_Id);
    if(!teacher){
        throw new Error("Teacher not found");
    }
    if(teacher.role !== 'teacher'){
        throw new Error("Only A Teacher(Admin) can delete student records");
    }
    const isMatch = await bcrypt.compare(password,teacher.password);
    if(!isMatch) {
        throw new Error("Incorrect password please try again")
    }
    const students = await StudentModel.find();
    for(const student of students){
        if(!student.picture_Id){
            continue;
        }
        try{
            await cloudinary.uploader.destroy(student.picture_Id);
        } catch(err) {
            throw new Error(`Could not delete ${student.name} picture`);
        }
    }
    await StudentModel.deleteMany();
    return {message:"All Students Deleted",status:"success"};
}