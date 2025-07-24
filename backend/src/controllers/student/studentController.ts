import { Request, Response } from 'express';
import * as studentService from '../../services/studentsGetService.js';
import { updateStudent } from '../../services/studentUpdateService.js';
import { deleteStudentById } from '../../services/studentDeleteService.js';


export const getStudents = async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.json(students);
};


export const updateStudentByName = async (req: Request, res: Response) => {
  try {
    const updatedStudent = await updateStudent(req.body);
    res.status(200).json(updatedStudent);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.body;

  if (!id){
    res.status(400).json({ error: 'Student id is required' });
    return;
  } 

  const result = await deleteStudentById(id);

  if (!result) {
    res.status(404).json({ message: 'Student not found' });
    return
  }

 res.status(200).json({ message: 'Student deleted successfully', student: result });
};

