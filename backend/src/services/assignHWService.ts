import { StudentModel } from "../models/student.model.js";
import { getDaysInMonth } from "../utils/getDaysInMonth.js";

export const assignHWService = async (student_Id: string, HW: string) => {
  if (!student_Id) {
    throw new Error("Required field not provided");
  }

  const student = await StudentModel.findById(student_Id);
  if (!student) {
    throw new Error("Student Not Found!");
  }

  const todayDate = new Date();
  const currentYear = todayDate.getFullYear();
  const currentMonth = todayDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  if (!Array.isArray(student.homework) || student.homework.length !== daysInMonth) {
    student.homework = Array(daysInMonth).fill("");
  }

  const todayIdx = todayDate.getDate() - 1; 

  
  for (let i = 0; i < daysInMonth; i++) {
    if (i < todayIdx) {
      
      continue;
    } else if (i === todayIdx) {
      
      student.homework[i] = HW;
    } else {
      
      student.homework[i] = "";
    }
  }

  await student.save();
  return student.homework[todayIdx];
};
