import StudentPerformanceModel from "../models/studentPerformance.model.js";
import { StudentPerformanceType } from "../models/types/studentPerformanceModelType.js";


export const studentUpdatePerformanceService = async(data:Omit<StudentPerformanceType,"dailyScore">,score:number) => {
    const {student_Id,year,month} = data;
    if (!student_Id || !year || !month) {
    throw new Error("Missing required fields");
  }
  try{
    const performanceResponse = await StudentPerformanceModel.findOneAndUpdate({
        student_Id,year,month},
        {$push:{dailyScore:score}},
        {new:true,upsert:true}    
    );
    return performanceResponse
  } catch(err){
    throw new Error("Could not create performance in db");
  }
  
} 