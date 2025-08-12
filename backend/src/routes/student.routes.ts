import { getStudents, updateStudentByID, deleteStudent } from "../controllers/student/studentController.js";
import express from 'express';
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.get('/getAllStudents', getStudents);
router.post('/updateStudent',upload.single('picture'), updateStudentByID);
router.post('/deleteStudent', deleteStudent);


export default router;