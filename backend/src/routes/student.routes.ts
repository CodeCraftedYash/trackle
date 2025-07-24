import { getStudents, updateStudentByName, deleteStudent } from "../controllers/student/studentController.js";
import express from 'express';

const router = express.Router();

router.get('/getAllStudents', getStudents);
router.post('/updateStudent', updateStudentByName);
router.post('/deleteStudent', deleteStudent)


export default router;