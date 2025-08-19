import StudentPerformanceModel from "../models/studentPerformance.model.js";

export const  studentCreatePerformanceService = async(
    student_Id:string,
    year:number = new Date().getFullYear(),
    month: number = new Date().getMonth() + 1
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

   const studentPerformance = await StudentPerformanceModel.create({
     student_Id,
     year,
     month,
     dailyScore:[]
   })
   return studentPerformance;
}