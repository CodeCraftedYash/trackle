import StudentPerformance from "../models/studentPerformance.model.js"


export const studentGetAllPerformanceService = async () =>{
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  try{
     const studentPerformanceData = await StudentPerformance.find({year:currentYear,month:currentMonth});
     return studentPerformanceData;
  }
  catch(err){
    throw new Error("could not find any student performance data");
  }
}