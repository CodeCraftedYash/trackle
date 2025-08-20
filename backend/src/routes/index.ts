import express from 'express';
import authRoutes from './authRoutes.js'
import studentRoutes from  './student.routes.js';
import studentPerformanceRoutes from './studentPerformance.routes.js'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/student', studentRoutes);
router.use('/student/performance',studentPerformanceRoutes)

export default router;