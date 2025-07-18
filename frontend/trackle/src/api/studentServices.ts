import axios from 'axios';
import { type StudentType } from '../types/studentType';
import { type AddStudentData } from '../types/AddStudentDataType';
import axiosInstance from './axios';

const API_URL = '/auth/student/register';

export const getStudents = async (): Promise<StudentType[]> =>
  (await axios.get(API_URL)).data;

export const addStudent = async (student: AddStudentData) =>
  axiosInstance.post(API_URL, student);

export const deleteStudent = async (id: string) =>
  axios.delete(`${API_URL}/${id}`);

export const updateStudent = async (student: StudentType) =>
  axios.put(`${API_URL}/${student.id}`, student);
