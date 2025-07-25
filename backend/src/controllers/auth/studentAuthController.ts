import { Request, Response } from 'express';
import { loginStudentService, registerStudentService } from '../../services/studentAuthService.js';

export async function registerStudentController( req:Request, res:Response ){
    try {
        const student = await registerStudentService(req.body);
        res.status(201).json({ 
            _id: student._id,
            name: student.name,
            gender: student.gender,
            role: student.role,
            mobileNumber: student.mobileNumber,
        });
    } catch (error:any) {
        if(error instanceof Error) {
              res.status(400).json({ message: error.message });
        }
        else res.status(500).json({ message: 'Something went wrong' });
    }
}

export async function loginStudentController( req:Request, res:Response ){
    try {
        const {student,token} = await loginStudentService(req.body);
        res.status(201).json({ 
           _id: student._id,
            name: student.name,
            gender: student.gender,
            role: student.role,
            mobileNumber: student.mobileNumber,
            message: 'Login successful',
            token,
        });
    } catch (error) {
        if(error instanceof Error) {
              res.status(400).json({ message: error.message });
        }
        else res.status(400).json({ message: 'Something went wrong' });
    }
}