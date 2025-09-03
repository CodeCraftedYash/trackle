import StudentPerformanceModel from "../models/studentPerformance.model.js";
import { StudentPerformanceType } from "../models/types/studentPerformanceModelType.js";


export const studentGetByIdPerformanceService = async(data:Omit<StudentPerformanceType,"dailyScore">) => {
    const {student_Id,year,month} = data;
    if (!student_Id || !year || !month) {
    throw new Error("Missing required fields");
  }
  try{
    const performanceResponse = await StudentPerformanceModel.findOne({
        student_Id,year,month},
    );
    return performanceResponse
  } catch(err){
    throw new Error("Could not get performance in db");
  }
  
} 