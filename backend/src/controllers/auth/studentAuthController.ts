import { Request, Response } from 'express';
import { loginStudentService, registerStudentService } from '../../services/studentAuthService.js';
import { uploadOnCloudinary } from '../../services/cloudinary.service.js';
import { studentCreatePerformanceService } from '../../services/studentCreatePerformanceService.js';

export async function registerStudentController( req:Request, res:Response ){
    try {
        const { body, file} = req;
        const studentData = { ...body };

        const mobileNumber: string = String(body.mobileNumber || "");
        if (!/^\d{10}$/.test(mobileNumber)) {
            res.status(400).json({ message: "Mobile Number must be exactly 10 digits" });
            return;
        }
        if (file) {
              try {
                 const cloudinaryResponse = await uploadOnCloudinary(file.path);
                 if (cloudinaryResponse) {
                 studentData.picture = cloudinaryResponse.secure_url;
                 studentData.picture_Id = cloudinaryResponse.public_id;
              }
              }
              catch (error : any) {
                 res.status(500).json({ message: "Image upload failed at register controller" });
                 return;
              }}
        const student = await registerStudentService(studentData);
        await studentCreatePerformanceService(student.id);
        res.status(201).json(student);
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
        res.status(201).json({student,token});
    } catch (error) {
        if(error instanceof Error) {
              res.status(400).json({ message: error.message });
        }
        else res.status(400).json({ message: 'Something went wrong' });
    }
}