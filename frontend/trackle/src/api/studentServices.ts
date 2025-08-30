import { useLoadingStore } from '../store/loadingStore';
import { type StudentType } from '../types/studentType';
import axiosInstance from './axios';

const updateStudentURL = '/student/updateStudent';
const deleteStudentURL = '/student/deleteStudent';
const getStudentsURL = '/student/getAllStudents';
const addStudentURL = '/auth/student/register';
const deleteAllStudentURL = '/student/deleteAllStudent';
const assignHWURL = '/student/assignHW';
const getAllStudentPerformanceURL = '/student/performance/getAllStudentPerformance';
const updateStudentPerformanceURL = '/student/performance/updateStudentPerformance';

const { setIsLoading } = useLoadingStore.getState();

export const getStudents = async (): Promise<StudentType[]> => {
  setIsLoading(true);
  const res = await axiosInstance.get(getStudentsURL)
  setIsLoading(false);
  return res.data;
}

export const addStudent = async (student: FormData) =>{
  setIsLoading(true);
  const res = await axiosInstance.post(addStudentURL, student);
  setIsLoading(false);
  return res.data;
}

export const deleteStudent = async (_id: string) =>{
  setIsLoading(true);
  const res = await axiosInstance.post(deleteStudentURL,{_id});
  setIsLoading(false);
  return res.data;
}

export const updateStudent = async (updatedStudent: FormData) =>{
  setIsLoading(true);
  const res = await axiosInstance.post(updateStudentURL, updatedStudent , {headers: { "Content-Type": "multipart/form-data" }});
  setIsLoading(false);
  return res.data;
}

export const deleteAllStudent = async (_Id:string,password:string) => {
  setIsLoading(true);
  const res = await axiosInstance.post(deleteAllStudentURL,{_Id,password});
  setIsLoading(false);
  return res.data;
}

export const assignHW = async (student_Id:string,HW:string) => {
  setIsLoading(true);
  const res = await axiosInstance.post(assignHWURL,{student_Id,HW});
  setIsLoading(false);
  return res.data;
}

export const getAllStudentPerformance = async () => {
  setIsLoading(true);
  const res = await axiosInstance.get(getAllStudentPerformanceURL);
  setIsLoading(false);
  return res.data;
}

export const getStudentPerformance = async (student_Id:string) => {
  setIsLoading(true);
  const getStudentPerformanceURL = `/student/performance/getStudentPerformance/${student_Id}`;
  const res = await axiosInstance.get(getStudentPerformanceURL);
  setIsLoading(false);
  return res.data;
}

export const updateStudentPerformance = async (student_Id:string,month:number,year:number,score:number) => {
  setIsLoading(true);
  const res = await axiosInstance.post(updateStudentPerformanceURL,{student_Id,year,month,score});
  setIsLoading(false);
  return res.data;
}