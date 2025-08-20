import { StudentModel } from "../models/student.model.js";


export const assignHWService = async (student_Id:string,HW:string) => {
    if(!student_Id){
        throw new Error("Required field not provided");
    }
    const student = await StudentModel.findById(student_Id);
    if(!student){
        throw new Error("Student Not Found !");
    }

    if(!student.homework){
        student.homework = Array(31).fill("");
    }
    const today = new Date().getDate();
    student.homework[today] = HW;

    if((today + 1) < student.homework.length && today < 32 )student.homework[today+1] = "";
    if((today + 2) < student.homework.length && today < 32 )student.homework[today+2] = "";
    
    await student.save();
    
    return student;
}