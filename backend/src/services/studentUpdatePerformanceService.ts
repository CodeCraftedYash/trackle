import StudentPerformanceModel from "../models/studentPerformance.model.js";
import { StudentPerformanceType } from "../models/types/studentPerformanceModelType.js";
import { getDaysInMonth } from "../utils/getDaysInMonth.js";

export const studentUpdatePerformanceService = async(data:Omit<StudentPerformanceType,"dailyScore">,score:number) => {
  const {student_Id,year,month} = data;
  if (!student_Id || !year || !month) {
    throw new Error("Missing required fields");
  } 

  if( score < 0 || score > 3){
    throw new Error("Score must be between 0 and 3");
  }

  const today = new Date().getDate()-1;

  let performance = await StudentPerformanceModel.findOne({
    student_Id,
    year,
    month,
  });

  if (!performance) {
    const daysInMonth = getDaysInMonth(year,month);
    performance = new StudentPerformanceModel({
    student_Id,
    year,
    month,
    dailyScore: Array(daysInMonth).fill(0),
    });
  }
  if(today > performance.dailyScore.length){
    throw new Error("Invalid day index for this month");
  }
  performance.dailyScore[today] = score;

  return await performance.save();
} 