import { getStudents, updateStudentByID, deleteStudent,assignHWStudentController, deleteAllStudentController } from "../controllers/student/studentController.js";
import express from 'express';
import { upload } from "../middlewares/multer.middleware.js";
import { verifyToken } from "../middlewares/verifyJWT.middleware.js";
import { verifyRole } from "../middlewares/verifyRole.middleware.js";

const router = express.Router();

router.get('/getAllStudents', verifyToken,verifyRole(['teacher']), getStudents);
router.post('/updateStudent',upload.single('picture'),verifyToken,verifyRole(['teacher']), updateStudentByID);
router.post('/deleteStudent',verifyToken,verifyRole(['teacher']), deleteStudent);
router.post('/assignHW' , verifyToken,verifyRole(['teacher']), assignHWStudentController);
router.post('/deleteAllStudent',verifyToken,verifyRole(['teacher']),deleteAllStudentController);

export default router;