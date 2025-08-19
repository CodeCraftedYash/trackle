import { Request,Response } from "express"
import { studentGetAllPerformanceService } from "../../services/studentGetAllPerformanceService.js";
import { studentGetByIdPerformanceService } from "../../services/studentGetByIdPerformanceService.js";
import { studentUpdatePerformanceService } from "../../services/studentUpdatePerformanceService.js";

export const getAllStudentPerformanceController = async (req: Request, res: Response) => {
  try {
    const studentPerformance = await studentGetAllPerformanceService();

    res.status(200).json({
      success: true,
      message: "Student performance fetched successfully",
      data: studentPerformance,
    });
    return;
  } catch (error: any) {
      res.status(500).json({
      success: false,
      message: "Failed to fetch student performance",
      error: error.message || "Internal Server Error",
    });
  }
  return;
};

export const getStudentPerformanceByIdController = async (req: Request, res: Response) => {
  try {
    const { student_Id } = req.body;
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const studentPerformance = await studentGetByIdPerformanceService({
      student_Id,
      year,
      month,
    });

    res.status(200).json(studentPerformance);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch student performance" });
  }
};

export const updateStudentPerformanceController = async(req:Request,res:Response) => {
    try {
    const { student_Id,year,month,score } = req.body;
    const studentPerformance = await studentUpdatePerformanceService({
      student_Id,
      year,
      month,
    },score);

    res.status(200).json(studentPerformance);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch student performance" });
  }
}
