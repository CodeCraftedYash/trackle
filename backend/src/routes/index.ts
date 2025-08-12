import express from 'express';
import authRoutes from './authRoutes.js'
import studentRoutes from  './student.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/student', studentRoutes);

export default router;