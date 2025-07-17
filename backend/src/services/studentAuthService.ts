import { hashPassword,comparePassword } from "../utils/bcrypt.js";
import { StudentModel } from "../models/student.model.js";
import { type StudentType } from "../models/types/types.js";
import jwt from "jsonwebtoken";

export async function registerStudentService(data:StudentType){
    const { name, gender, password,mobileNumber,studyingClass,picture } = data;
    const hashedPassword = await hashPassword(password);
    const newStudent = await StudentModel.create({
        name,
        gender,
        mobileNumber,
        password: hashedPassword,
        role: "student",
        studyingClass,
        picture,
        fees:0,
        ifFeesPaid: false,
        homework: []
    });
    return newStudent
}

export async function loginStudentService(data:{name: string, password: string}){
    const { name, password } = data;
    const student = await StudentModel.findOne({ name });
    if( !student ) {
        throw new Error("student not found");
    }
    const isMatch = await ( comparePassword( password, student.password ));
    if( !isMatch ){
        throw new Error("Invalid password");
    }
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not set in environment variables");
    }
    const token = jwt.sign({ id: student._id, role: student.role }, process.env.JWT_SECRET);
    return {student,token};
} 