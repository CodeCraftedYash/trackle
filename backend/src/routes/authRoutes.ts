import express from 'express';
import { registerStudentController, loginStudentController } from '../controllers/auth/studentAuthController.js';
import { registerTeacherController, loginTeacherController } from '../controllers/auth/teacherAuthController.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = express.Router();

router.post('/student/register',upload.single('picture'), registerStudentController);
router.post('/student/login', loginStudentController);
router.post('/teacher/register',upload.single('picture'), registerTeacherController);
router.post('/teacher/login', loginTeacherController);

export default router;