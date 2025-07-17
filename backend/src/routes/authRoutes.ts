import express from 'express';
import { registerStudentController, loginStudentController } from '../controllers/auth/studentAuthController.js';
import { registerTeacherController, loginTeacherController } from '../controllers/auth/teacherAuthController.js';

const router = express.Router();

router.post('/student/register', registerStudentController);
router.post('/student/login', loginStudentController);
router.post('/teacher/register', registerTeacherController);
router.post('/teacher/login', loginTeacherController);

export default router;