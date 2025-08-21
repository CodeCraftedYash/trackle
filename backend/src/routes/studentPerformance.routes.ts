import express from "express";
import { getStudentPerformanceByIdController, getAllStudentPerformanceController, updateStudentPerformanceController } from "../controllers/student/studentPerformanceController.js";

const router = express.Router();

router.post('/updateStudentPerformance',updateStudentPerformanceController);

router.get('/getStudentPerformance/:student_Id',getStudentPerformanceByIdController);

router.get('/getAllStudentPerformance',getAllStudentPerformanceController);

export default router;
