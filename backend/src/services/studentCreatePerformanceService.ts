import StudentPerformanceModel from "../models/studentPerformance.model.js";
import { getDaysInMonth } from "../utils/getDaysInMonth.js";

export const  studentCreatePerformanceService = async(
    student_Id:string,
    year:number = new Date().getFullYear(),
    month: number = new Date().getMonth() 
) => {
   if(!student_Id){
     throw new Error("Student Id does not exists");    
   }

   const existingPerformance = await StudentPerformanceModel.findOne({
    student_Id,
    year,
    month,
  });

  if (existingPerformance) {
    return existingPerformance;
  }
  const daysInMonth = getDaysInMonth(year,month);
   const studentPerformance = await StudentPerformanceModel.create({
     student_Id,
     year,
     month,
     dailyScore:Array(daysInMonth).fill(0)
   })
   return studentPerformance;
}