import { Request, Response } from 'express';
import { loginTeacherService, registerTeacherService } from '../../services/teacherAuthService.js';
import { uploadOnCloudinary } from '../../services/cloudinary.service.js';

export async function registerTeacherController( req:Request, res:Response ){
    try {
            const { body, file} = req;
            const teacherData = { ...body };
            if (file) {
                  try {
                     const cloudinaryResponse = await uploadOnCloudinary(file.path);
                     if (cloudinaryResponse) {
                     teacherData.picture = cloudinaryResponse.secure_url;
                     teacherData.picture_Id = cloudinaryResponse.public_id;
                  }
                  }
                  catch (error : any) {
                    return res.status(500).json({ message: "Image upload failed at register controller" });
                  }}
            const teacher = await registerTeacherService(teacherData);
            res.status(201).json(teacher);
        } catch (error:any) {
            if(error instanceof Error) {
                  res.status(400).json({ message: error.message });
            }
            else res.status(500).json({ message: 'Something went wrong' });
        }
}

export async function loginTeacherController( req:Request, res:Response ){
    try {
        const {teacher,token} = await loginTeacherService(req.body);
        res.status(201).json({teacher,token});
    } catch (error) {
        if(error instanceof Error) {
              res.status(400).json({ message: error.message });
        }
        else res.status(400).json({ message: 'Something went wrong' });
    }
}