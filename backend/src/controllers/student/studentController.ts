import { Request, Response } from 'express';
import * as studentService from '../../services/studentsGetService.js';
import { updateStudent } from '../../services/studentUpdateService.js';
import { deleteStudentById } from '../../services/studentDeleteService.js';
import { uploadOnCloudinary } from '../../services/cloudinary.service.js';
import { objectCleaner } from '../../utils/objectCleaner.js';
import { StudentType } from '../../models/types/types.js';


export const getStudents = async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.json(students);
};


export const updateStudentByID = async (req: Request, res: Response) => {
  try {
    const { body, file, params } = req;
    const studentId = body._id || params.id;
    if (!studentId) {
    res.status(400).json({ error: 'Student ID is required for update' });
    return;
    }

    let updatedStudentData = objectCleaner<StudentType>(body) as Partial<StudentType> & { _id: string };

    if (file) {
      try {
         const cloudinaryResponse = await uploadOnCloudinary(file.path);
         if (cloudinaryResponse) {
         updatedStudentData.picture = cloudinaryResponse.secure_url
      }
      }
      catch (error : any) {
  
      }}

    updatedStudentData._id = studentId;

    const updatedStudent = await updateStudent(updatedStudentData);
    res.status(200).json(updatedStudent);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { _id } = req.body;
  if (!_id){
    res.status(400).json({ error: 'Student id is required' });
    return;
  } 

  const result = await deleteStudentById(_id);

  if (!result) {
    res.status(404).json({ message: 'Student not found' });
    return
  }

 res.status(200).json({ message: 'Student deleted successfully', student: result });
};

