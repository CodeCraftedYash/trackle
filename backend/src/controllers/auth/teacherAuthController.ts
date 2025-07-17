import { Request, Response } from 'express';
import { loginTeacherService, registerTeacherService } from '../../services/teacherAuthService.js';

export async function registerTeacherController( req:Request, res:Response ){
    try {
        const teacher = await registerTeacherService(req.body);
        res.status(201).json({ 
            _id: teacher._id,
            name: teacher.name,
            gender: teacher.gender,
            role: teacher.role,
            mobileNumber: teacher.mobileNumber,
        });
    } catch (error) {
        if(error instanceof Error) {
              res.status(400).json({ message: error.message });
        }
        else res.status(400).json({ message: 'Something went wrong' });
    }
}

export async function loginTeacherController( req:Request, res:Response ){
    try {
        const {teacher,token} = await loginTeacherService(req.body);
        res.status(201).json({ 
            _id: teacher._id,
            name: teacher.name,
            gender: teacher.gender,
            role: teacher.role,
            mobileNumber: teacher.mobileNumber,
            message: 'Login successful',
            token
        });
    } catch (error) {
        if(error instanceof Error) {
              res.status(400).json({ message: error.message });
        }
        else res.status(400).json({ message: 'Something went wrong' });
    }
}