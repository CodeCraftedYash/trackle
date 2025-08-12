import { hashPassword,comparePassword } from "../utils/bcrypt.js";
import { TeacherModel } from "../models/teacher.model.js";
import { type TeacherType } from "../models/types/types.js";
import jwt from 'jsonwebtoken';
export async function registerTeacherService({data,picture_Id}: {data: TeacherType, picture_Id: string}) {
    const { name, gender, password, mobileNumber,picture} = data;
    const hashedPassword = await hashPassword(password);
    const newTeacher = await TeacherModel.create({
        name,
        gender,
        mobileNumber,
        password: hashedPassword,
        role: "teacher",
        picture,
        picture_Id,
    })
    return newTeacher;
}

export async function loginTeacherService(data:{name: string, password: string}){
    const { name, password } = data;
    const teacher = await TeacherModel.findOne({ name });
    if( !teacher ) {
        throw new Error("Teacher not found");
    }
    const isMatch = await ( comparePassword( password, teacher.password ));
    if( !isMatch ){
        throw new Error("Invalid password");
    }
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not set in environment variables");
    }
    const token = jwt.sign({ id: teacher._id, role: teacher.role }, process.env.JWT_SECRET);
    return {teacher,token};
}