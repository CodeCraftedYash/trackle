import { getStudents, updateStudentByID, deleteStudent, deleteAllStudentController } from "../controllers/student/studentController.js";
import express from 'express';
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.get('/getAllStudents', getStudents);
router.post('/updateStudent',upload.single('picture'), updateStudentByID);
router.post('/deleteStudent', deleteStudent);
router.post('/deleteAllStudent',deleteAllStudentController);

export default router;