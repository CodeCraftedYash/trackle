import StudentPerformanceModel from "../models/studentPerformance.model.js";
import { StudentPerformanceType } from "../models/types/studentPerformanceModelType.js";

export const studentUpdatePerformanceService = async(data:Omit<StudentPerformanceType,"dailyScore">,score:number) => {
  const {student_Id,year,month} = data;
  if (!student_Id || !year || !month) {
    throw new Error("Missing required fields");
  } 
  const today = new Date().getDate()-1;
   try {
    let performance = await StudentPerformanceModel.findOne({
      student_Id,
      year,
      month,
    });

    if (!performance) {

      performance = new StudentPerformanceModel({
        student_Id,
        year,
        month,
        dailyScore: Array(31).fill(0),
      });
    }

    performance.dailyScore[today] = score;

    const updatedPerformance = await performance.save();
    return updatedPerformance;
  } catch (err) {
    throw new Error("Could not update performance in db");
  }
  
} 